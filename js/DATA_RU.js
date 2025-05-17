SKILLS = [
    'Golang', 'Python', 'PHP', 'SQL', 'PostgreSQL', 'Apache Kafka', 'RabbitMQ', 'ClickHouse', 'Redis',
    'Микросервисная архитектура', 'Конкурентность', 'asyncio', 'multiprocessing', 'threading',
    'Качество кода', 'Тестирование', 'SOLID', 'ООП',
    'FastAPI', 'SqlAlchemy', 'Alembic', 'pytest',
    'Rest API', 'GraphQL', 'Websockets', 'gRPC', 'Docker', 'Linux'
]

DATA = [
    {
        'company': 'B.ART',
        'company_link': 'bart-group.com',
        'position': 'Senior Python developer',
        'term': '1 год 1 месяц',
        'project_link': 'getcrypto.ru',
        'gallery': ['gallery/getcrypto/schema.png'],
        'title': 'Работал в качестве основного backend-разработчика в команде. Вместе мы сделали с нуля проект в Fintech сфере.',
        'desc': `
        • Разработка архитектуры проекта с разделением на микросервисы<br>
        • Организация взаимодействия между сервисами с использованием Apache Kafka<br>
        • Использование паттерна Transactional outbox в микросервисной архитектуре<br>
        • Создание базового модуля (core) для повторного использования во всех микросервисах<br>
        • Реализация JWT-аутентификации между сервисами на платформе Keycloak<br>
        • Настройка мониторинга с помощью Grafana, Prometheus и Sentry<br>
        • Внедрение двухфакторной аутентификации (2FA) через Google Authenticator, SMS и email<br>
        • Совместная работа с DevOps над настройкой CI/CD-процессов<br>
        • Разработка системы уведомлений через WebSocket на базе Centrifugo<br>
        • Создание конфигураций Docker и Docker Compose<br>
        • Интеграция с внешними сервисами Garantex и Swapster<br>
        • Написание unit-тестов, нагрузочных и функциональных тестов<br>
        • Контроль качества кода с использованием pylint и других линтеров<br>
        • Проведение ревью кода других разработчиков<br>
        `,
        'skills': ['Python', 'FastAPI', 'SqlAlchemy', 'Микросервисы', 'Asyncio', 'PostgreSQL', 'Apache Kafka', 'Redis', 'Keycloak', 'Centrifugo', 'pytest', 'Docker'],
        'page_break': true,
    },
    /*{
        'company': 'под NDA',
        'company_link': '',
        'position': 'Senior Python',
        'term': '1 год',
        'project_link': null,
        'gallery': null,
        'title': 'Работал в команде в качестве backend-разработчика. Активно участвовал в развитии проекта.',
        'desc': `
        • Разработка новых частей системы.<br>
        • Поддержка имеющегося функционала и исправление багов.<br>
        • Написание SQL-запросов и их оптимизация.<br>
        • Разработка панелей администрирования на Django admin.<br>
        • Создание API-интерфейсов с Django Rest framework.<br>
        • Программное взаимодействие с сервисами bestchange, exnode.<br>
        • Асинхронные обработчики задач на Celery, Flower, RabbitMQ.<br>
        • Разработка аналитических инструментов для повышения конверсии.<br>
        • Использовал Redis в качестве кэша и очереди.<br>
        • Покрытие своего кода тестами (юнит, нагрузочные, функциональные)<br>
        • Участие в перекрестном код-ревью<br>
        `,
        'skills': ['Python', 'Django', 'Celery', 'SQL', 'PostgreSQL', 'Redis', 'unittest', 'Docker'],
        'page_break': false,
    },*/
    {
        'company': 'Ц.П.У',
        'company_link': null,
        'position': 'Senior Python',
        'term': '9 месяцев',
        'project_link': 'scoutjobs.cc',
        'gallery': ['gallery/scoutjobs/schema.png'],
        'title': 'Участвовал в создании сервиса для массового подбора персонала с нуля. Был основным backend-разработчиком. После начала СВО проект заморозили.',
        'desc': `
        • Разрабатывал микросервисную архитектуру проекта<br>
        • Реализовал механизм real-time синхронизации данных<br>
        • Создал настраиваемую систему управления полями документов в JSON<br>
        • Построил систему обнаружения и устранения конфликтов данных<br>
        • Разработал модульную систему интеграции с внешними источниками<br>
        • Обеспечил интеграцию с API Google Sheets, Helpdesk Eddy, Salesforce и Amo CRM<br>
        • Спроектировал отказоустойчивую и масштабируемую систему<br>
        • Реализовал гибкие сценарии синхронизации (push & pull)<br>
        `,
        'skills': ['Python', 'FastAPI', 'SqlAlchemy', 'Микросервисы', 'Alembic', 'Asyncio', 'PostgreSQL', 'RabbitMQ', 'Multiprocessing', 'pytest', 'Docker'],
        'page_break': true,
    },
    {
        'company': 'SibEDGE',
        'company_link': 'sibedge.com',
        'position': 'Senior Python backend',
        'term': '1 год',
        'gallery': ['gallery/sibedge/schema.png', 'gallery/sibedge/1.png', 'gallery/sibedge/2.png'],
        'title': 'Участвовал в разработке платформы для энергетического сектора с нуля. Был основным backend-разработчиком.',
        'desc': `
        • Разработал и внедрил микросервисную архитектуру<br>
        • Реализовал распределенную систему обработки задач (воркеры) с RabbitMQ<br>
        • Обеспечил горизонтальное масштабирование на кластер из 50+ серверов<br>
        • Создал административный интерфейс для управления задачами и воркерами<br>
        • Оптимизировал производительность системы и повысил её отказоустойчивость<br>
        • Внедрил MongoDB как основное хранилище данных<br>
        • Настроил централизованный сбор и анализ логов на стеке ELK<br>
        • Разработал SDK для интеграции платформы со сторонними системами<br>
        • Обеспечил 85%+ покрытие кода тестами (unit, функциональные, нагрузочные)<br>
        `,
        'skills': ['Python', 'FastAPI', 'MongoDB', 'Микросервисы', 'RabbitMQ', 'ELK', 'Multiprocessing', 'pytest', 'Docker'],
        'page_break': false,
    },
    {
        'company': 'Nekor',
        'company_link': 'nekor.ru',
        'position': 'Python backend',
        'term': '7 месяцев',
        'gallery': ['gallery/nekor/schema.png', 'gallery/nekor/1.png', 'gallery/nekor/2.png', 'gallery/nekor/3.png', 'gallery/nekor/4.png', 'gallery/nekor/5.png', 'gallery/nekor/6.png'],
        'title': 'Создал для nekor.ru с нуля платформу монетизации API-доступа для бизнес-клиентов.',
        'desc': `
        • Реализовал высоконагруженный прокси-сервис на aiohttp для маршрутизации API-запросов<br>
        • Спроектировал масштабируемую микросервисную архитектуру<br>
        • Разработал клиентский портал с функционалом подписки и оплаты доступа к API<br>
        • Создал административную панель управления API-ресурсами и пользователями<br>
        • Реализовал автоматизированную систему генерации API-документации<br>
        • Настроил систему сбора и аналитики статистики запросов на ClickHouse<br>
        • Применил асинхронную архитектуру для обеспечения высокой производительности<br>
        `,
        'skills': ['Python', 'aiohttp', 'asyncio', 'SqlAlchemy Core', 'PostgreSQL', 'ClickHouse', 'Redis', 'Микросервисы', 'Асинхронность', 'Django', 'pytest', 'Docker'],
        'page_break': true,
    },
    {
        'company': 'Atom Secure',
        'company_link': null,
        'position': 'Python backend',
        'term': '1 год',
        'gallery': ['gallery/atomsecure/1.png', 'gallery/atomsecure/2.png', 'gallery/atomsecure/3.png'],
        'desc': `
        Участвовал в создании решения для анализа логов и выявления киберугроз в реальном времени.<br>
        <br>
        • Проектировал архитектуру системы и подбирал технологический стек<br>
        • Разработал механизм реального времени для поиска и обработки логов<br>
        • Реализовал хранение и аналитику данных в ClickHouse<br>
        • Создал <a href="https://github.com/qvp/aiochorm" target="_blank">aiochorm</a> – асинхронную ORM для работы с ClickHouse<br>
        • Разрабатывал REST API для взаимодействия с системой<br>
        • Интегрировал Django REST Framework с ClickHouse ORM<br>
        • Активно участвовал в перекрёстном ревью кода<br>
        • Обеспечил тестовое покрытие разрабатываемых модулей<br>
        `,
        'skills': ['Python', 'PostgreSQL', 'ClickHouse', 'Redis', 'Django', 'DRF', 'Channels', 'Celery', 'unittest', 'Docker', 'Асинхронность'],
        'page_break': false,
    },
    {
        'company': 'Wiki Item',
        'company_link': null,
        'project_link': 'wikiitem.com',
        'position': 'PHP backend',
        'term': '1 год 3 месяца',
        'gallery': ['gallery/wikiitem/1.png', 'gallery/wikiitem/2.png', 'gallery/wikiitem/3.png', 'gallery/wikiitem/4.png', 'gallery/wikiitem/5.png'],
        'title': 'Создал с нуля маркетплейс, напоминающий Яндекс Маркет и Википедию. Данные о товарах собираются с Aliexpress, Яндекс Маркета и Amazon. При этом пользователи имеют возможность самостоятельно добавлять или изменять карточки товаров, получая за это баллы рейтинга. Каждое изменение сохраняется как новая версия, а через интерфейс можно вернуться к любой предыдущей версии.',
        'desc': `
        • Разработал структуру базы данных, включающую свыше 40 таблиц.<br>
        • База данных содержит более полумиллиона товарных позиций.<br>
        • Составлял и улучшал сложные запросы на SQL.<br>
        • Разработал архитектуру проекта, выделив независимые микросервисы.<br>
        • Создал механизм управления версиями для возможности отмены изменений.<br>
        • Реализовал парсер товаров с платформы Яндекс Маркет.<br>
        • Разработал инструмент для сбора изображений из Google Images.<br>
        • Настроил систему конфигурации полей для обработки и преобразования данных после парсинга.<br>
        • Работал над ускорением работы базы данных и кода для уменьшения времени отклика.<br>
        • Создал четыре дополнительных микросервиса для проекта.<br>
        • Подключил API платформ Ebay, Amazon, Aliexpress, YouTube и Яндекс Маркет.<br>
        `,
        'skills': ['SQL', 'PostgreSQL', 'Микросервисы', 'PHP', 'Laravel framework', 'Slim', 'tests'],
        'page_break': true,
    },
    {
        'company': 'Astrologiko',
        'company_link': null,
        'project_link': 'astrologiko.com',
        'position': 'PHP backend',
        'term': '8 месяцев',
        'gallery': ['gallery/astrologiko/1.png', 'gallery/astrologiko/2.png', 'gallery/astrologiko/3.png', 'gallery/astrologiko/4.png', 'gallery/astrologiko/5.png', 'gallery/astrologiko/6.png', 'gallery/astrologiko/7.png', 'gallery/astrologiko/8.png', 'gallery/astrologiko/9.png'],
        'title': 'Создал с нуля платформу для генерации индивидуальных гороскопов. Доступны бесплатная версия и версия с расширенными функциями. За дополнительную оплату пользователи могут пообщаться с астрологом в онлайн-чате. Реализована панель администратора.',
        'desc': `
        • Создание индивидуального гороскопа на основе расположения планет.<br>
        • Онлайн-общение с астрологом через протокол Websockets.<br>
        • Обработка платежей и передача чеков в налоговую службу.<br>
        • Контроль подписок пользователей.<br>
        • Сбор данных о координатах планет и других параметров с различных сайтов.<br>
        • Панель администратора для управления пользователями, астрологами и чатами.<br>
        • Функция импорта контактов и приглашения друзей через email.<br>
        • Автоматическое построение натальной карты с помощью кода.<br>
        • Мини-игра с использованием карт Таро.<br>
        `,
        'skills': ['SQL', 'MySQL', 'Websockets', 'PHP', 'Laravel framework', 'tests'],
        'page_break': false,
    },
    {
        'company': 'SimLead',
        'company_link': null,
        'position': 'PHP backend',
        'term': '2 года 2 месяца',
        'title': 'Участвовал в разработке ряда проектов, будучи постоянным сотрудником в компании, предоставляющей аутсорсинговые услуги.',
        'desc': `
        <a href="https://textdeliver.com" target="_blank">textdeliver.com</a> - Платформа для формирования SMS- и e-mail-рассылок, а также автоматизированных телефонных звонков. Выполнил основную работу по разработке проекта. Подключил API: Twillio, CallRail, CallFire, MailChimp.<br>
        <br>
        <a href="https://pressplay.io" target="_blank">pressplay.io</a> - Инструмент для создания видео-лендингов. Занимался добавлением новых возможностей и сопровождением проекта. Внедрил API: AWS для хранения файлов.<br>
        <br>
        <a href="https://a2xanxiety.com" target="_blank">a2xanxiety.com</a> - интернет магазин плюс CRM-система. Разрабатывал с нуля.<br>
        `,
        'skills': ['SQL', 'MySQL', 'MongoDB', 'PHP', 'Laravel framework', 'tests'],
        'page_break': true,
    },
    {
        'company': 'ЧоПочом',
        'company_link': 'chopochom.com',
        'position': 'PHP backend',
        'term': '8 месяцев',
        'title': 'Создал с нуля платформу для автоматизации процессов формирования и управления контекстной рекламой в Яндекс.Директ для рекламного агентства «ЧоПочом».',
        'desc': `
        • Спроектировал базу данных с более чем 30 таблицами.<br>
        • Писал и оптимизировал сложные SQL запросы.<br>
        • Разработал менеджер фоновых задач (похожий на celery + flower).<br>
        • Сделал полную интеграцию приложения с Yandex Direct.<br>
        • Интегрировал платежные системы WebMoney, Yandex Money.<br>        
        • Разработал структуру базы данных, включающую свыше 30 таблиц.<br>
        • Создавал и улучшал сложные запросы на SQL.<br>  
        • Реализовал систему управления фоновыми задачами (аналогичную celery + flower).<br>  
        • Обеспечил полное взаимодействие приложения с Яндекс.Директ.<br>
        • Подключил платежные сервисы WebMoney и Яндекс.Деньги.<br>
        `,
        'skills': ['SQL', 'MySQL', 'PHP', 'Yii framework'],
        'page_break': false,
    },
];
