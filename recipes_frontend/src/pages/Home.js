import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/') // Убедитесь, что URL корректен
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Категории блюд</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;