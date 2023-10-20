# google-books

Frontend для проекта google-books
**Клонируем репозиторий c помощью команды**

```
 $ git clone https://github.com/Studio-Yandex-Practicum/sl_max_frontend.git
```

**Устанавливаем зависимости**

```
$ npm i
```

**Запуск сервера в режиме разработки**

```
$ npm run dev
```

**Создание билда**

```
$ npm build
```

**Деплой проекта**

```
$ npm run deploy
```

**сборка проекта с помощью docker**

1. Установить [Docker](https://www.docker.com/)
2. Development

```sh
$ docker-compose -f docker-compose.dev.yml up
# доступ по адресу http://localhost:3000
```

3. Production

```sh
$ docker-compose -f docker-compose.prod.yml up
# доступ по адресу http://localhost
```
