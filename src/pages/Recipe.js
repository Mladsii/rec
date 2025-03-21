import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Recipe() {
  const { id } = useParams(); // Получаем ID рецепта из URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Отправляем GET-запрос на Django-сервер
    axios.get(`http://127.0.0.1:8000/api/recipes/${id}/`)
      .then(response => {
        console.log('Received recipe:', response.data); // Отладочное сообщение
        setRecipe(response.data);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]); // Зависимость от ID рецепта

  if (!recipe) return <p>Загрузка...</p>; // Показываем заглушку, пока данные не загружены

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ингредиенты:</h2>
      <p>{recipe.ingredients}</p>
      <h2>Инструкция:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;