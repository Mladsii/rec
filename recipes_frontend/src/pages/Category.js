import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Category() {
  const { id } = useParams(); // Получаем ID категории из URL
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Отправляем GET-запрос на Django-сервер
    axios.get(`http://127.0.0.1:8000/api/categories/${id}/`)
      .then(response => {
        console.log('Received category:', response.data); // Отладочное сообщение
        setCategory(response.data);
      })
      .catch(error => console.error('Error fetching category:', error));
  }, [id]); // Зависимость от ID категории

  if (!category) return <p>Загрузка...</p>; // Показываем заглушку, пока данные не загружены

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h2>Рецепты:</h2>
      <ul>
        {category.recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;