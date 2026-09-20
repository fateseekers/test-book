openapi: 3.0.3
info:
  title: API каталога книг
  version: 1.0.0
  description: |
    REST API для управления каталогом книг и авторов.
    Поддерживает роли: гость (просмотр) и пользователь (CRUD).
    Аутентификация через Bearer-токен (JWT).
servers:
  - url: /api/v1
    description: Основной сервер API

paths:
  /auth/login:
    post:
      summary: Авторизация пользователя
      description: Возвращает access-токен для роли `user`.
      tags:
        - Аутентификация
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
      responses:
        '200':
          description: Успешная авторизация
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LoginResponse'
        '401':
          description: Неверные учётные данные
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /books:
    get:
      summary: Список книг
      description: Доступно гостям и пользователям. Поддерживает пагинацию, фильтрацию и поиск.
      tags:
        - Книги
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: per-page
          in: query
          schema:
            type: integer
            default: 20
        - name: author_id
          in: query
          schema:
            type: integer
        - name: year
          in: query
          schema:
            type: integer
        - name: search
          in: query
          schema:
            type: string
      responses:
        '200':
          description: Список книг
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookListResponse'
    post:
      summary: Создание книги
      description: Доступно только авторизованным пользователям.
      tags:
        - Книги
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: '#/components/schemas/BookForm'
      responses:
        '201':
          description: Книга создана
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookResponse'
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '422':
          description: Ошибки валидации
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /books/{id}:
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: integer
    get:
      summary: Получить книгу по ID
      tags:
        - Книги
      responses:
        '200':
          description: Информация о книге
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookResponse'
        '404':
          description: Книга не найдена
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    put:
      summary: Полное обновление книги
      tags:
        - Книги
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: '#/components/schemas/BookForm'
      responses:
        '200':
          description: Книга обновлена
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookResponse'
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '404':
          description: Книга не найдена
        '422':
          description: Ошибки валидации
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    patch:
      summary: Частичное обновление книги
      tags:
        - Книги
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/BookInput'
      responses:
        '200':
          description: Книга обновлена
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BookResponse'
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '404':
          description: Книга не найдена
        '422':
          description: Ошибки валидации
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    delete:
      summary: Удаление книги
      tags:
        - Книги
      security:
        - bearerAuth: []
      responses:
        '204':
          description: Книга удалена
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '404':
          description: Книга не найдена

  /authors:
    get:
      summary: Список авторов
      description: Доступно гостям и пользователям.
      tags:
        - Авторы
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: per-page
          in: query
          schema:
            type: integer
            default: 20
        - name: search
          in: query
          schema:
            type: string
      responses:
        '200':
          description: Список авторов
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthorListResponse'
    post:
      summary: Создание автора
      tags:
        - Авторы
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AuthorInput'
      responses:
        '201':
          description: Автор создан
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthorResponse'
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '422':
          description: Ошибки валидации
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /authors/{id}:
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: integer
    get:
      summary: Информация об авторе и его книгах
      tags:
        - Авторы
      responses:
        '200':
          description: Данные автора
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthorResponse'
        '404':
          description: Автор не найден
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    put:
      summary: Обновление автора
      tags:
        - Авторы
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AuthorInput'
      responses:
        '200':
          description: Автор обновлён
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AuthorResponse'
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '404':
          description: Автор не найден
        '422':
          description: Ошибки валидации
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    delete:
      summary: Удаление автора
      tags:
        - Авторы
      security:
        - bearerAuth: []
      responses:
        '204':
          description: Автор удалён
        '401':
          description: Неавторизован
        '403':
          description: Недостаточно прав
        '404':
          description: Автор не найден

  /reports/top-authors:
    get:
      summary: ТОП-10 авторов по количеству книг за год
      description: Публичный отчёт. Доступен гостям и пользователям.
      tags:
        - Отчёты
      parameters:
        - name: year
          in: query
          required: true
          schema:
            type: integer
          description: Год выпуска книг
      responses:
        '200':
          description: Список авторов
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TopAuthorsResponse'
        '400':
          description: Параметр year не указан или неверен
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

  schemas:
    LoginRequest:
      type: object
      required:
        - username
        - password
      properties:
        username:
          type: string
        password:
          type: string
          format: password

    LoginResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          type: object
          properties:
            token:
              type: string
            expires_at:
              type: string
              format: date-time
            user:
              type: object
              properties:
                id:
                  type: integer
                username:
                  type: string
                role:
                  type: string
                  example: user

    Book:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        year:
          type: integer
        description:
          type: string
        isbn:
          type: string
        cover_url:
          type: string
        authors:
          type: array
          items:
            $ref: '#/components/schemas/AuthorShort'

    AuthorShort:
      type: object
      properties:
        id:
          type: integer
        full_name:
          type: string

    Author:
      type: object
      properties:
        id:
          type: integer
        full_name:
          type: string
        books:
          type: array
          items:
            $ref: '#/components/schemas/BookShort'

    BookShort:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        year:
          type: integer

    BookInput:
      type: object
      properties:
        title:
          type: string
        year:
          type: integer
        description:
          type: string
        isbn:
          type: string
        author_ids:
          type: array
          items:
            type: integer

    BookForm:
      type: object
      required:
        - title
        - year
        - author_ids
        - cover
      properties:
        title:
          type: string
        year:
          type: integer
        description:
          type: string
        isbn:
          type: string
        author_ids:
          type: array
          items:
            type: integer
        cover:
          type: string
          format: binary
          description: Файл изображения обложки

    AuthorInput:
      type: object
      required:
        - full_name
      properties:
        full_name:
          type: string

    BookResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          $ref: '#/components/schemas/Book'

    AuthorResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          $ref: '#/components/schemas/Author'

    BookListResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          type: object
          properties:
            items:
              type: array
              items:
                $ref: '#/components/schemas/Book'
            pagination:
              $ref: '#/components/schemas/Pagination'

    AuthorListResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          type: object
          properties:
            items:
              type: array
              items:
                $ref: '#/components/schemas/AuthorShort'
            pagination:
              $ref: '#/components/schemas/Pagination'

    TopAuthorsResponse:
      type: object
      properties:
        success:
          type: boolean
          example: true
        data:
          type: object
          properties:
            year:
              type: integer
            items:
              type: array
              items:
                $ref: '#/components/schemas/TopAuthor'

    TopAuthor:
      type: object
      properties:
        rank:
          type: integer
        author_id:
          type: integer
        full_name:
          type: string
        books_count:
          type: integer

    Pagination:
      type: object
      properties:
        total:
          type: integer
        page:
          type: integer
        per_page:
          type: integer
        total_pages:
          type: integer

    Error:
      type: object
      properties:
        success:
          type: boolean
          example: false
        errors:
          type: array
          items:
            $ref: '#/components/schemas/ErrorItem'

    ErrorItem:
      type: object
      properties:
        field:
          type: string
        message:
          type: string