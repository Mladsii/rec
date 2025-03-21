## Технологии

- **Backend**:
  - Django
  - Django Rest Framework (DRF)
  - DRF Spectacular (OpenAPI + Swagger)
  - Django CORS Headers

- **Frontend**:
  - React
  - Axios
  - React Router DOM

- **Инструменты**:
  - Git
  - GitHub
  - Node.js + npm


## Установка и запуск

### Backend

1. перейти в папку  recipes_backend
    ```bash
   cd recipes_backend

   
2. Установите зависимости Python:
    ```bash
    pip install -r requirements.txt

3. Примените миграции:
    ```bash
    python manage.py migrate
4. Запустите сервер:
    ```bash
    python manage.py runserver
API будет доступно по адресу: http://127.0.0.1:8000/api/



1. перейти в папку  recipes_frontend
    ```bash
   cd recipes_frontend
   
2. Установите зависимости Node.js:
    ```bash
    npm install axios react-router-dom
   
3. Запустите React-приложение:
    ```bash
    npm start

API документация
Документация API доступна по адресу:
http://127.0.0.1:8000/api/docs/

Здесь вы можете просмотреть все доступные эндпоинты, параметры запросов и примеры ответов.

