DATA = {
    tags: [
        {
            id: 1,
            title: 'Python'
        },
        {
            id: 2,
            title: 'Django'
        },
        {
            id: 4,
            title: 'aiohttp'
        },
        {
            id: 3,
            title: 'Django REST framework'
        },
        {
            id: 61,
            title: 'Django Channels'
        },
        {
            id: 8,
            title: 'PostgreSQL'
        },
        {
            id: 34,
            title: 'ClickHouse'
        },
        {
            id: 36,
            title: 'RabbitMQ'
        },
        {
            id: 9,
            title: 'Redis'
        },
        {
            id: 60,
            title: 'Асинхронность'
        },
        {
            id: 37,
            title: 'Микросервисная архитектура'
        },
        {
            id: 42,
            title: 'pytest'
        },
        {
            id: 43,
            title: 'Docker'
        },
        {
            id: 44,
            title: 'FastAPI'
        },
        {
            id: 45,
            title: 'SqlAlchemy'
        },
        {
            id: 46,
            title: 'Multiprocessing'
        },
        {
            id: 48,
            title: 'Alembic'
        },
        {
            id: 62,
            title: 'Celery'
        },
        {
            id: 63,
            title: 'unittest'
        },
        {
            id: 64,
            title: 'SQL'
        },
        {
            id: 65,
            title: 'Scrapy'
        },
        {
            id: 66,
            title: 'Flask'
        },
    ],
    bestWorks: [
        {
            id: 6,
            title: 'Project 6',
            short_desc: '',
            term: '1 год',
            desc: 'Проект под NDA. Работал в команде над проектом с нуля. В обязанности входила разработка новых модулей для проекта.' +
                '<br>' +
                '- Создание пайплайнов для обработки данных с использованием очередей и асинхронности \\ многозадачности.' +
                '<br>' +
                '- Проектирование баз данных, построение запросов к ним и их оптимизация.' +
                '<br>' +
                '- Разработка панели администрирования на Django и Django Rest framework.' +
                '<br>' +
                '- Разработка модулей для расширения существующих возможностей системы.' +
                '<br>' +
                '- Интеграция со сторонними системами.' +
                '<br>' +
                '- Внесение изменений и улучшений в существующие части системы.' +
                '<br>' +
                '- Создание новый API-интерфейсов.' +
                '<br>' +
                '- Написание тестов' +
                '<br>' +
                '- Код ревью',
            tags: [1,60,46,36,8,2,3,44,45,42,42],
            api: [],
            parsing: [],
            preview: 'project_6/preview.jpg',
            previews: []
        },
        {
            id: 5,
            title: 'ScoutJobs Integrations',
            short_desc: 'Система синхронизации данных из разных источников в реальном времени.',
            term: '9 месяцев',
            desc: 'Проект разработан мной с нуля для рекрутингового агенства ScoutJobs.' +
                '<br>' +
                'Информация хранится в разных источниках: Админ панель ScoutJobs, Google Sheets, Helpdesk Eddy, Salesforce, Amo CRM.' +
                '<br>' +
                'Одна и таже информация может быть отредактирована любым из источников или же несколькими одновременно.' +
                '<br>' +
                '<br>' +
                'Основные цели проекта:' +
                '<br>' +
                '<ul>' +
                '<li>Синхронизировать данные во всех источниках в реальном времени.</li>' +
                '<li>Сделать защиту данных, которая будет находить конфликты, не допускать повреждения данных, логировать проблемы и оповещать о них.</li>' +
                '<li>Спроектировать систему так, чтобы при росте нагрузки ее можно было легко масштабировать.</li>' +
                '<li>Сделать возможность легкого подключения новых источников данных.</li>' +
                '<li>Предусмотреть оба сценария - когда источник может сам оповещать об изменениях и когда изменения можно получить только самостоятельно отправив запрос.</li>' +
                '<li>Разработать способ быстрого конфигурирования полей которые нужно синхронизировать (типы данных, проверка на конфликты, настройки).</li>' +
                '<li>Разработать систему плагинов для простого расширения функционала полей которые нужно синхронизировать.</li>' +
                '</ul>',
            tags: [1,44,45,46,48,36,8,37,42,43],
            api: ['Google Sheets', 'Helpdesk', 'Salesforce', 'AMO CRM'],
            parsing: [],
            preview: 'integrations/schema.png',
            previews: ['integrations/schema.png']
        },
        {
            id: 4,
            title: 'Protection Cloud',
            short_desc: 'Платформа для облачных вычислений в сфере энергетики.',
            term: '1 год и 1 месяц',
            desc: 'Проект разработан мной с нуля для компании RTSoft (https://www.rtsoft.ru).' +
                '<br>' +
                'Protection Cloud - это платформа для облачных вычислений задач в сфере энергетики.' +
                '<br>' +
                '<br>' +
                'Основные цели проекта:' +
                '<ul>' +
                '<li>Запускать одновременно сотни задач на отдельных серверах (из-за особенностей лицензирования ПО, на каждом сервере запускается лишь одна копия софта, которая вычисляет одну задачу. Сервера на Windows)</li>' +
                '<li>Разработать панель администратора из которой можно управлять задачами: отслеживать прогресс выполнения, отменять задачи, задавать задачам приоритет выполнения. А так же следить за работой серверов (воркеров)</li>' +
                '<li>Спроектировать систему с учетом того, что задачи могут выполняться от нескольких минут до нескольких часов.</li>' +
                '<li>Обеспечить управление воркерами из панели администрирования: включение\\отключение определенных воркеров, отмена текущих задач.</li>' +
                '<li>Оповещение о прогрессе выполнения задач через websockets.</li>' +
                '</ul>',
            tags: [1,44,45,46,36,8,37,42,43],
            api: [],
            parsing: [],
            preview: 'pcloud/schema.png',
            previews: ['pcloud/schema.png', 'pcloud/2.png', 'pcloud/1.png']
        },
        {
            id: 3,
            title: 'API Manager',
            short_desc: 'B2B сервис для предоставления платного доступа к различным API компании.',
            term: '10 месяцев',
            desc: 'Проект разработан мной с нуля для nekor.ru' +
                '<br>' +
                'Представляет собой B2B-сервис для предоставления платного доступа к различным API компании.' +
                '<br>' +
                '<br>' +
                'Основные цели проекта:' +
                '<ul>' +
                '<li>Разработать proxy-сервис, который выступает посредником между клиентом и реальным API. Кроме передачи данных от пользователя к API и обратно он проверяет доступ к запрашиваемому методу а так же сохраняет лог запроса.</li>' +
                '<li>Сделать proxy-сервис максимально эффективным и легко масштабируемым.</li>' +
                '<li>Личный кабинет клиента, где он может: купить доступ к API, посмотреть документацию по доступным ему API-методам, посмотреть статистику своих запросо по каждому API-методу.</li>' +
                '<li>Админ панель, в которой можно создавать тарифы, добавлять к ним API-методы и документацию к ним.  А так же смотреть общую статистику.</li>' +
                '<li>Сделать эффективный механиз подсчета и хранения большого колличества статистики запросов, для этого был выбран Clickhouse..</li>' +
                '</ul>',
            tags: [1,2,3,4,8,34,9,36,37,43,42, 60],
            api: [],
            parsing: [],
            preview: 'apimanager/schema.png',
            previews: ['apimanager/schema.png', 'apimanager/1.png', 'apimanager/2.png', 'apimanager/3.png', 'apimanager/4.png', 'apimanager/5.png', 'apimanager/6.png']
        },
        {
            id: 2,
            title: 'Wiki Item',
            short_desc: 'Торговая площадка, в которой любой желающий может создать собственный магазин.',
            term: '1 год и 3 месяца',
            desc: 'Торговая площадка, в которой любой желающий может создать собственный магазин. База насчитывает более 550 000 товаров, которые можно продавать в своем магазине.' +
                ' Свои товары можно загрузить через REST API или добавить вручную, через конструктор.' +
                ' Конструктор помогает быстро добавлять товары, он автоматически ищет и предлагает изображения, видео обзоры.' +
                ' Редактирование товаров построено по принципу википедии. За наполнение базы начисляется рейтинг.' +
                '<br>' +
                '<br>' +
                'Проект реализован мной с нуля. Кроме самого сайта было решено много задач по парсингу и автоматической обработке большого количества товаров.' +
                ' Очень много работал с SQL, строил сложные запросы и оптимизировал их работу. Некоторые части системы вынесены в отдельные микросервисы.' +
                ' Создан REST API для загрузки товаров. Создано несколько отдельных вспомогательных микросервисов:' +
                '<br>' +
                '- Микросервис для парсинга и обработки товаров перед загрузкий на основной сайт.' +
                '<br>' +
                '- Микросервис, работающий на странице товара - подгружает предложения по выбранному товару из Ebay.' +
                '<br>' +
                '- Микросервис, работающий на странице товара - подгружает предложения по выбранному товару из Aliexpress.' +
                '<br>' +
                '- Микросервис, работающий в редакторе товара - ищет изображения в гугл-картинках по названию товара и предлагает варианты для загрузки.',
            tags: [1,64,8,2,3,62,65,66,37],
            api: ['Ebay', 'Amazon', 'Aliexpress', 'YouTube', 'Яндекс Маркет'],
            parsing: ['Google Images', 'Яндекс Маркет', 'Amazon'],
            preview: 'wikiitem/1.png',
            previews: ['wikiitem/1.png', 'wikiitem/2.png', 'wikiitem/3.png', 'wikiitem/4.png', 'wikiitem/5.png']
        },
        {
            id: 1,
            title: 'Atom Secure',
            short_desc: 'Система управления логами, отслеживания угроз и атак на серверах.',
            term: '1 год и 4 месяца',
            desc: 'Система управления логами, отслеживания угроз и атак на серверах.' +
                '<br>' +
                'Разрабатывал проект в команде. Мной сделана система поиска логов и доставки их в реальном времени на ClickHouse и Channels.' +
                '<br>' +
                'Разработана aiochorm - асинхронная версия clickhouse_orm, данная библиотека выложена на github.' +
                '<br>' +
                'А так же разработал с нуля и доработал много других компонентов системы.',
            tags: [1,8,34,9,2,3,61,62,63,43],
            api: [],
            parsing: [],
            preview: 'atom/1.png',
            previews: ['atom/1.png', 'atom/2.png', 'atom/3.png']
        },
    ],
    openSource: [
        {
            title: 'aiochorm',
            link: 'https://github.com/qvp/aiochorm',
            short_desc: 'Асинхронная ORM для ClickHouse.' +
                '<br>' +
                '<br>' +
                'Сделана в рамках работы над проектом Atom Secure.',
        },
        {
            title: 'GO validation package',
            link: 'https://github.com/qvp/validation',
            short_desc: 'Расширенная валидация данных для GOLang. ' +
                '<br>' +
                '<br>' +
                'Красивая и мощная система валидации, во многом вдохновлена валидаторами Laravel и Yii framework.',
        },
        {
            title: 'Django REST Fast',
            link: 'https://github.com/qvp/django-rest-fast',
            short_desc: 'Расширение Django автоматически генерирующие Swagger-документацию на основе views и forms. ' +
                '<br>' +
                '<br>' +
                'Моя попытка-эксперимент превратить Django в FastAPI. Цель заменить грамоздкий DRF и обойтись только нативными Django-views и forms',
        },
    ]
};