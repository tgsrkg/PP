# Лабораторная 1

Проект для автоматизированного тестирования сайта [SauceDemo](https://www.saucedemo.com/) с использованием Playwright и TypeScript.

## Установка и запуск

1. Клонировать репозиторий

2. Установить зависимости:
    ```bash
    npm install
    ```

3. Запустить тесты:
    ```bash
    npx playwright test
    ```

4. Открыть отчет о тестах:
    ```bash
    npx playwright show-report
    ```

## Структура проекта

Проект организован по паттерну **Page Object Model (POM)** для удобного и поддерживаемого тестирования.

- **`pages/`**: Содержит Page Object для каждой страницы веб-сайта, такие как:
  - `LoginPage`: Страница входа в систему.
  - `ProductsPage`: Страница списка товаров.
  
- **`tests/`**: В этой папке находятся тестовые файлы, которые проверяют пользовательские сценарии.
  - `Login functionality`: 1 Вход с некорректными учетными данными.
  - `Login with empty fields`: 2 Вход с пустыми полями.
  - `Add product to cart`: 4 Добавление одного товара в корзину.
  
- **`playwright.config.js`**: Конфигурационный файл для Playwright, который управляет параметрами тестов, такими как браузеры, таймауты и тестовые окружения.
