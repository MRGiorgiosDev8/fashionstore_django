# WFStore (World Fashion Store)

## Содержание
- [Описание](#описание)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Запуск проекта](#запуск-проекта)


## Описание
WFStore - это Django проект, который представляет собой прототип интернет-магазина, где пользователи могут просматривать и управлять своими заказами.

### Основные функции

- **Просмотр товаров:** Пользователи могут просматривать ассортимент одежды, включая детали товаров, такие как изображения, описание и цена.
- **Добавление в корзину:** Пользователи могут добавлять товары в корзину.
- **Регистрация и вход:** Пользователи могут зарегистрироваться, чтобы создать аккаунт, войти в систему и управлять своей заказами.
- **Управление заказом:** В корзине отображается информация о каждом товаре, его количество и общая стоимость всех товаров. Пользователи могут увеличивать или уменьшать количество товаров, и стоимость корзины автоматически пересчитывается.
- **Анимации GSAP:** В проекте используются анимации GSAP для создания плавных и динамичных переходов и эффектов на страницах магазина, что улучшает визуальное восприятие и делает взаимодействие с сайтом более приятным.
- **Адаптивность:** Интерфейс выполнен с использованием библиотеки `Bootstrap`, что делает сайт адаптивным и удобным для пользователей на различных устройствах.



## Технологии
### Серверные технологии:
- Django — Основной фреймворк для разработки веб-приложений.
- Pillow — Библиотека для работы с изображениями в Python.

### Клиентские технологии:
- JavaScript — Язык программирования для создания динамичного контента на веб-страницах.
- CSS — Каскадные таблицы стилей для описания внешнего вида документа.
- HTML — Язык разметки гипертекста для создания веб-страниц.
- GSAP (GreenSock Animation Platform) — Библиотека для создания высокопроизводительных анимаций.
- jQuery — Библиотека JavaScript для упрощения работы с DOM.
- Bootstrap — Фреймворк для создания адаптивных и мобильных веб-сайтов.

## Структура проекта
- ### fashionstore_django/

`manage.py` — Основной скрипт для управления проектом Django.

`db.sqlite3` — База данных SQLite для локальной разработки.

`readme.md` — Документация проекта.

`requirements.txt` — Список зависимостей Python для проекта.

- ### shop/ — Основное приложение проекта.

`__init__.py`

`asgi.py` — Конфигурация ASGI для развертывания.

`settings.py` — Основные настройки проекта Django.

`urls.py` — Главная конфигурация URL маршрутизации.

`wsgi.py` — Конфигурация WSGI для развертывания.

`media/` — Папка для хранения загружаемых медиафайлов.

`products/` — Медиафайлы продуктов.


`templates/` — Шаблоны, используемые проектом.


`user/` — Шаблоны для пользовательских страниц.

- ### products/ — Приложение для управления продуктами.

`__init__.py`

`admin.py`  — Регистрация моделей для административного интерфейса.

`apps.py` — Конфигурация приложения.

`models.py` — Определение моделей базы данных.

`urls.py` — URL маршрутизация для приложения.

`views.py` — Определение представлений (views) приложения.

`migrations/` — Папка для хранения миграций базы данных.

`static/` — Статические файлы приложения (CSS, JavaScript, Bootstrap изображения и т.д.).

`templates/` — Шаблоны, используемые приложением.

- ### users/ — Приложение для управления пользователями.

`__init__.py`

`admin.py` — Регистрация моделей для административного интерфейса.

`apps.py` — Конфигурация приложения.

`forms.py` — Формы, используемые приложением.

`models.py` — Определение моделей базы данных.

`urls.py` — URL маршрутизация для приложения.

`views.py` — Определение представлений (views) приложения.

`migrations/` — Папка для хранения миграций базы данных.

`templates/` — Шаблоны, используемые приложением.

## Запуск проекта

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/MRGiorgiosDev8/fashionstore_django.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd fashionstore_django
    ```   

3. Установите зависимости из файла `requirements.txt`:

    ```bash
    pip install -r requirements.txt
    ```

4. Запустите сервер разработки:

    ```bash
    python manage.py runserver
    ```

5. Откройте браузер и перейдите по адресу `http://127.0.0.1:8000/`, чтобы увидеть работающий проект.