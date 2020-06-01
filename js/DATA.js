DATA_RU = {
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
            id: 38,
            title: 'Flask'
        },
        {
            id: 3,
            title: 'Django REST framework'
        },
        {
            id: 32,
            title: 'Celery'
        },
        {
            id: 33,
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
            id: 40,
            title: 'asyncio'
        },
        {
            id: 39,
            title: 'Scrapy'
        },
        {
            id: 37,
            title: 'Микросервисная архитектура'
        },
        {
            id: 41,
            title: 'unittest'
        },
        {
            id: 42,
            title: 'pytest'
        },
        {
            id: 43,
            title: 'Docker'
        },
    ],
    desc: 'Меня зовут Александр, мне 29. Занимаюсь backend-разработкой 10 лет, из которых последние 5 лет на Python.\n' +
        'Большинство моих работ - это долгосрочные проекты, которые я делал "с нуля". Это помогло мне получить разносторонний опыт на всех уровнях:\n' +
        'выбирать правильную архитектуру, проектировать базы данных, находить нестандартные решения, разрабатывать собственные библиотеки,\n' +
        'доводить проект до "production ready". Особое внимание уделяю качеству кода. Пишу тесты, документацию. Постоянно занимаюсь повышением квалификации.\n' +
        '<br>\n' +
        '<br>\n' +
        '<b>Отлично знаю</b> <i>(отлично знаю теорию, много применял на практике):</i>\n' +
        '<br>\n' +
        'Python, Django, DRF, Postgres, SQL, ООП, Тестирование, Качество кода (SOLID, DRY, KISS, и.т.д), Асинхронное программирование,\n' +
        '<br>\n' +
        'aiohttp, Celery, Redis, Docker, Unix\n' +
        '<br>\n' +
        '<br>\n' +
        '<b>Неплохо разбираюсь</b> <i>(хорошо знаю теорию, несколько раз применял на практике):</i>\n' +
        '<br>\n' +
        'RabbitMQ, ClickHouse, Многопоточность, Многопроцессорность, Golang, Микросервисная архитектура',
    bestWorks: [
        {
            id: 1,
            title: 'API Manager',
            link: null,
            short_desc: 'B2B сервис для предоставления платного доступа к различным API компании.',
            term: '7 месяцев',
            desc: 'B2B сервис для предоставления платного доступа к различным API компании.\n'
                +' Проект выполнен для "Национальная инжиниринговая корпорация (https://nekor.ru)".',
            my_work: 'Мной разработана серверная часть проекта с нуля. Проект состоит из панели администрирования, личного кабинета клиента и прокси сервиса для запросов к платным API.' +
                ' Архитектура построена в виде отдельных, слабо связанных между собой микросервисов для того, чтобы лучше масштабировать прокси сервис и справляться с нагрузками. '
+'Взаимодействие между сервисами происходит через обмен сообщениями с помощью RabbitMQ.\n'
+'\n'
+'<i>API прокси</i>: проверяет права доступа и подпись запроса, выполняет проксирование запроса, отправляет данные о запросе в основной сервис. Построен на aiohttp, Redis, RabbitMQ\n'
+'\n'
+'<i>Личный кабинет клиента</i>: подписка на тариф для достапа к API, возможность оплачивать через Яндекс.Кассу для физических лиц и выставление счетов для юридическийх,' +
    ' документация по доступным API-методам, статистика по запросам/балансу, история платежей, обращения в службу поддержки. Построен на Django + DRF (Фронтенд часть: SPA на vue).\n'
+'\n'
+'<i>Панель администрирования</i>: добавление и настройка API-провайдеров и документации к ним в формате swagger, управление учетными записями клиентов, финансовые операции для юридических лиц,' +
    ' отображение различной статистики, логирование событий безопасности. Построена на Django Admin.\n',
            tags: [1,2,3,4,8,34,9,36,37,43,41,42],
            api: [],
            parsing: [],
            preview: 'apimanager/1.png',
            previews: ['apimanager/1.png', 'apimanager/2.png', 'apimanager/3.png', 'apimanager/4.png', 'apimanager/5.png', 'apimanager/6.png']
        },
        {
            id: 2,
            title: 'Astrologiko',
            link: 'https://astrologiko.com',
            short_desc: 'Ваш персональный гороскоп и чат с астрологом в реальном времени.',
            term: '7 месяцев',
            desc: 'Astrologiko - это сервис персонализированных гороскопов и возможности общаться с астрологом онлайн. Основа сервиса - анализ вашей карты планет научной программой. На основе личных данных (дата, место и время рождения) формируется персональный гороскоп, рисуется натальная карта на каждый день и многое другое.',
            my_work: 'Проект полностью разработан мной (клиент и сервер). В этом проекте было много работы с данными. На основе информации о пользователе для него расчитывалось положение планет и и другая астрологическая информация. На основе этих данных строится ежедневный гороскоп и отрисовывается карта планет. Для этого было разработанно и покрыто тестами несколько библиотек. Из за ресурсоемкости был введен механизм распределения задач в очереди. Кроме астрологических вычислений было много более обыденных задач:\n' +
                '- Real-time чат с астрологом\n' +
                '- Принятие платежей и отправка чеков в налоговую\n' +
                '- Управление подписками пользователей\n' +
                '- Мини игра ТАРО\n' +
                '- Парсинг координат планет и других данных с нескольких сайтов\n' +
                '- Мини CRM для управления астрологами, сообщениями и.т.п\n' +
                '- Импорт и приглашение друзей из почты и многое другое.',
            tags: [1,2,3,8,33],
            api: ['CloudPayments', 'Dreamkas', 'Gmail', 'Yandex.Mail', 'Mail.ru', 'Vkontakte', 'Facebook', 'Odnoklassniki'],
            parsing: ['Таблицы координат планет', 'Несколько астрологических сайтов'],
            preview: 'astrologiko/1.png',
            previews: ['astrologiko/1.png','astrologiko/2.png','astrologiko/3.png','astrologiko/4.png','astrologiko/5.png','astrologiko/6.png','astrologiko/7.png','astrologiko/8.png','astrologiko/9.png',]
        },
        {
            id: 3,
            title: 'WikiItem',
            link: 'http://wikiitem.com',
            short_desc: 'Аналог Яндекс.Маркет. Место, где покупатели и продавцы могут найти друг друга.',
            term: '1 год и 2 месяца',
            desc: 'Торговая площадка, в которой любой желающий может создать собственный магазин. База насчитывает более 550 000 товаров, которые можно продавать в своем магазине. ' +
                'Свои товары можно загрузить через REST API или добавить вручную, через конструктор. Конструктор помогает быстро добавлять товары, он автоматически ищет и предлагает изображения, видео обзоры. ' +
                'Редактирование товаров построено по принципу википедии. За наполнение базы начисляется рейтинг.',
            my_work: 'Проект полностью разработан мной. Кроме самого сайта было решено много задач по парсингу и автоматической обработке большого количества товаров. Некоторые части системы вынесены в отдельные микросервисы.' +
                ' Создан REST API для загрузки товаров. Создано несколько отдельных вспомогательных микросервисов:\n' +
                '- Микросервис для парсинга и обработки товаров перед загрузкий на основной сайт. Построен на Flask + Scrapy.\n'+
                '- Микросервис, работающий на странице товара - подгружает предложения по выбранному товару из Ebay. Построен на Flask + Ebay API.\n'+
                '- Микросервис, работающий на странице товара - подгружает предложения по выбранному товару из Aliexpress. Построен на Flask + Aliexpress API.\n'+
                '- Микросервис, работающий в редакторе товара - ищет изображения в гугл-картинках по названию товара и предлагает варианты для загрузки. Построен на Node.js + Phantom.js\n',
            tags: [1,2,38,8,37,39,41,43],
            api: ['Ebay', 'Amazon', 'Aliexpress', 'YouTube', 'Yandex Market'],
            parsing: ['Google Images', 'Yandex Market', 'Amazon Products'],
            preview: 'wikiitem/1.png',
            previews: ['wikiitem/1.png', 'wikiitem/2.png']
        },
        {
            id: 4,
            title: 'Atom Secure',
            link: null,
            short_desc: 'Система управления логами, отслеживания угроз и атак на серверах.',
            term: null,
            desc: 'Приложение позволяет просматривать и управлять логами от различных систем. Отслеживать угрозы и атаки на эти системы.',
            my_work: 'Мной сделана система поиска логов и доставки их в реальном времени на ClickHouse и Channels. А так же работал над другими компонентами системы. Разработана aiochorm - асинхронная версия clickhouse_orm, данная библиотека выложена на github.',
            tags: [1,2,34,8,33,9],
            api: ['ATT&CK MITRE'],
            parsing: [],
            preview: 'atom/2.png',
            previews: ['atom/1.png', 'atom/2.png', 'atom/3.png']
        }
    ],
    openSource: [
        {
            title: 'aiochorm',
            link: 'https://github.com/qvp/aiochorm',
            short_desc: 'Асинхронная ORM для ClickHouse.',
        },
        {
            title: 'GO validation package',
            link: 'https://github.com/qvp/validation',
            short_desc: 'Пакет для валидации данных с расширенными возможностями.',
        },
    ],
    adjectives: ['machiavellian', 'mad', 'magnanimous', 'materialistic', 'martial', 'manipulative', 'majestic',
        'mature', 'maverick', 'meritorious', 'memorable', 'meticulous', 'miraculous', 'mirthful', 'monumental',
        'munificent', 'mystifying', 'marvelous', 'marvellous', 'modern'],
    nouns: ['developer', 'dancer', 'dark', 'daylight', 'deadline', 'dog', 'decorator', 'defender', 'demeanor',
        'demon', 'deployment', 'design', 'destiny', 'destroyer', 'devil', 'driver', 'duck', 'dynamite'],
    trans: {
        'code_examples': 'Прмеры кода',
        'resume': 'Резюме',
        'best_works': 'Лучшие работы',
        'read_more': 'Подробнее...',
        'go_over': 'Перейти...',
        'back': 'Назад',
        'link': 'Ссылка',
        'my_participation': 'Мое участие',
        'used_technologies': 'Использовал технологии',
        'term': 'срок',
        'api_integrations': 'Интегрировал API',
        'data_parsing': 'Парсинг данных'
    }
};

// Copy data by value
DATA_EN = JSON.parse(JSON.stringify(DATA_RU))

// Fix russian words in tags
DATA_EN.tags[13].title = 'Microservice architecture'

// Translate main description
DATA_EN.desc = 'My name is Alexander, I\'m 29, I\'m from Russia. I have been working as a backend developer for 10 years, of which the ' +
    'last 5 years have been in Python. Most of my work is a long-term project that I did from scratch. ' +
    'This helped me gain versatile experience at all levels: choose the right architecture, design databases, ' +
    'find custom solutions, develop my own libraries, bring the project to production ready. I pay special ' +
    'attention to the quality of the code. I am writing tests, documentation. Constantly engaged in continuing education.' +
    '<br>\n' +
    '<br>\n' +
    '<b>Know very well</b> <i>(know the theory perfectly, applied a lot in practice):</i>\n' +
    '<br>\n' +
    'Python, Django, DRF, Postgres, SQL, OOP, Testing, Code quality (SOLID, DRY, KISS, etc), Asynchronous programming,\n' +
    '<br>\n' +
    'aiohttp, Celery, Redis, Docker, Unix\n' +
    '<br>\n' +
    '<br>\n' +
    '<b>good knowledges</b> <i>( know the theory well, put it into practice several times):</i>\n' +
    '<br>\n' +
    'RabbitMQ, ClickHouse, Multithreading, Multiprocessing, Golang, Microservice architecture';

// Translate work 'API Manager'
DATA_EN.bestWorks[0].short_desc = 'B2B service for providing paid access to various company APIs.';
DATA_EN.bestWorks[0].term = '7 months';
DATA_EN.bestWorks[0].desc = 'B2B service for providing paid access to various company APIs. The project has been completed for the National Engineering Corporation (https://nekor.ru).';
DATA_EN.bestWorks[0].my_work = 'I developed the server part of the project from scratch. The project consists of an administration panel, a personal account of the client and a proxy service for requests to paid APIs. '
    + 'The architecture is built in the form of separate, weakly interconnected microservices in order to better scale the proxy service and cope with the loads. '
    + 'Interaction between services occurs through messaging using RabbitMQ. \n'
    + '\n'
    + '<i> Proxy API </i>: checks the access rights and signature of the request, performs proxying of the request, sends the data about the request to the main service. Built on aiohttp, Redis, RabbitMQ \n '
    + '\n'
    + '<i> Customer’s personal account </i>: subscription to the tariff for access to the API, the ability to pay via Yandex.Money for individuals and billing for legal entities, '
    + 'documentation on available API methods, statistics on requests / balance, payment history, contacting support. Built on Django + DRF (Frontend part: SPA on vue). \n '
    + '\n'
    + '<i> Administration Panel </i>: adding and configuring API providers and documentation for them in swagger format, managing customer accounts, financial transactions for legal entities, '
    + 'display of various statistics, logging security events. Built on Django Admin.';

// Translate work 'Astrologiko'
DATA_EN.bestWorks[1].short_desc = 'Your personal horoscope and chat with the astrologer in real time.';
DATA_EN.bestWorks[1].term = '7 months';
DATA_EN.bestWorks[1].desc = 'Astrologiko is a service of personalized horoscopes and the ability to communicate with an astrologer online. The basis of the service is the analysis of your planet map with a scientific program. Based on personal data (date, place and time of birth), a personal horoscope is formed, a natal chart for every day is drawn, and much more.';
DATA_EN.bestWorks[1].my_work = 'The project is completely developed by me (client and server). There was a lot of data work in this project. Based on information about the user, the position of the planets and other astrological information was calculated for him. Based on these data, a daily horoscope is built and a map of the planets is drawn. For this, several libraries were developed and covered by tests. Due to resource consumption, a mechanism for distributing tasks in a queue was introduced. In addition to astrological calculations, there were many more mundane tasks: \n'
    + '- Real-time chat with the astrologer \n'
    + '- Accepting payments and sending checks to the tax \n'
    + '- Manage user subscriptions \n'
    + '- TARO Mini Game \n'
    + '- Parsing coordinates of planets and other data from several sites \n'
    + '- Mini CRM for managing astrologers, messages, etc. \n'
    + '- Import and invite friends from the mail and much more.';
DATA_EN.bestWorks[1].parsing = ['Planet Coordination Tables', 'Several astrological sites'];

// Translate work 'WikiItem'
DATA_EN.bestWorks[2].short_desc = 'Analog Amazon. A place where buyers and sellers can find each other.';
DATA_EN.bestWorks[2].term = '1 year and 2 months';
DATA_EN.bestWorks[2].desc = 'A trading platform in which anyone can create their own store. The base has more than 550,000 items that you can sell in your store. '
    + 'You can upload your products via the REST API or add them manually through the constructor. The designer helps to quickly add products, it automatically searches and offers images, video reviews. '
    + 'Product editing is based on the principle of Wikipedia. A rating is awarded for filling the base.';
DATA_EN.bestWorks[2].my_work = 'The project is completely developed by me. In addition to the site itself, many parsing and automatic processing tasks for a large number of products were solved. Some parts of the system are placed in separate microservices. '
    + 'Created REST API for loading goods. Several separate auxiliary microservices have been created: \n'
    + '- Microservice for parsing and processing goods before uploading to the main site. Built on Flask + Scrapy. \n'
    + '- Microservice working on the product page - loads offers on the selected product from Ebay. Built on Flask + Ebay API. \n'
    + '- Microservice working on the product page - loads offers on the selected product from Aliexpress. Built on Flask + Aliexpress API. \n'
    + '- Microservice working in the product editor - searches for images in Google images by product name and offers options for download. Built on Node.js + Phantom.js \ n ';

// Translate work 'Atom Secure'
DATA_EN.bestWorks[3].short_desc = 'A system for managing logs, tracking threats and attacks on servers.';
DATA_EN.bestWorks[3].desc = 'The application allows you to view and manage logs from various systems. Track threats and attacks on these systems.';
DATA_EN.bestWorks[3].my_work = 'I made a system for searching logs and delivering them in real time to ClickHouse and Channels. He also worked on other components of the system. Developed aiochorm - asynchronous version of clickhouse_orm, this library is posted on github.';

// Translate open source projects
DATA_EN.openSource[0].short_desc = 'Asynchronous ORM for ClickHouse.';
DATA_EN.openSource[1].short_desc = 'A package for validating data with advanced features.';

// Trans UI
DATA_EN.trans = {
    'code_examples': 'Code examples',
    'resume': 'Resume',
    'best_works': 'Best Works',
    'read_more': 'Read more...',
    'go_over': 'Go over...',
    'back': 'Back',
    'link': 'Link',
    'my_participation': 'My participation',
    'used_technologies': 'Used technologies',
    'term': 'term',
    'api_integrations': 'Api integrations',
    'data_parsing': 'Data parsing'
}

DATA = {
    'ru': DATA_RU,
    'en': DATA_EN
};
