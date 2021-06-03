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
            title: 'Microservice architecture'
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
        {
            id: 44,
            title: 'FastAPI'
        },
    ],
    desc: 'My name is Alexander, I\'m 30, I\'m from Russia. I have been working as a backend developer for 10 years, of which the ' +
        'last 5 years have been in Python. Most of my work is a long-term project that I did from scratch. ' +
        'This helped me gain versatile experience at all levels: choose the right architecture, design databases, ' +
        'find custom solutions, develop my own libraries, bring the project to production ready. I pay special ' +
        'attention to the quality of the code. I am writing tests, documentation. Constantly engaged in continuing education.' +
        '<br>\n' +
        '<br>\n' +
        '<b>Know very well</b> <i>(know the theory perfectly, applied a lot in practice):</i>\n' +
        '<br>\n' +
        'Python, Django, DRF, Postgres, RabbitMQ, ClickHouse, SQL, SqlAlchemy, OOP, Testing, Code quality (SOLID, DRY, KISS, etc), Asynchronous programming,\n' +
        '<br>\n' +
        'Microservice architecture, Multithreading, Multiprocessing, aiohttp, FastAPI, Celery, Redis, Docker, Unix\n',
    bestWorks: [
        {
            id: 5,
            title: 'Protection Cloud',
            link: null,
            short_desc: 'Platform for cloud computing in energy sphere.',
            term: '10 months',
            desc: 'Platform for cloud computing in energy sphere. The project has been completed for RTSoft (https://www.rtsoft.ru).',
            my_work: 'I developed the server part of the project from scratch. The project consists of an administration panel and a lot of microservices. '
    + 'Microservices do the calculations and scale dynamically based on needs. At the moment, about 40 of them have been launched. '
    + 'Services receive tasks through RabbitMQ. \n'
    + '\n'
    + 'in the administration panel, you can manage current tasks: add, cancel, restart, etc.',
            tags: [1,36,9,8,37,42,44,43],
            api: [],
            parsing: [],
            preview: 'pcloud/1.png',
            previews: ['pcloud/1.png', 'pcloud/2.png']
        },
        {
            id: 1,
            title: 'API Manager',
            link: null,
            short_desc: 'B2B service for providing paid access to various company APIs.',
            term: '7 months',
            desc: 'B2B service for providing paid access to various company APIs. The project has been completed for the National Engineering Corporation (https://nekor.ru).',
            my_work: 'I developed the server part of the project from scratch. The project consists of an administration panel, a personal account of the client and a proxy service for requests to paid APIs. '
    + 'The architecture is built in the form of separate, weakly interconnected microservices in order to better scale the proxy service and cope with the loads. '
    + 'Interaction between services occurs through messaging using RabbitMQ. \n'
    + '\n'
    + '<i> Proxy API </i>: checks the access rights and signature of the request, performs proxying of the request, sends the data about the request to the main service. Built on aiohttp, Redis, RabbitMQ \n '
    + '\n'
    + '<i> Customer’s personal account </i>: subscription to the tariff for access to the API, the ability to pay via Yandex.Money for individuals and billing for legal entities, '
    + 'documentation on available API methods, statistics on requests / balance, payment history, contacting support. Built on Django + DRF (Frontend part: SPA on vue). \n '
    + '\n'
    + '<i> Administration Panel </i>: adding and configuring API providers and documentation for them in swagger format, managing customer accounts, financial transactions for legal entities, '
    + 'display of various statistics, logging security events. Built on Django Admin.',
            tags: [1,2,3,4,8,34,9,36,37,43,41,42],
            api: [],
            parsing: [],
            preview: 'apimanager/1.png',
            previews: ['apimanager/1.png', 'apimanager/2.png', 'apimanager/3.png', 'apimanager/4.png', 'apimanager/5.png', 'apimanager/6.png']
        },
        {
            id: 4,
            title: 'Atom Secure',
            link: null,
            short_desc: 'A system for managing logs, tracking threats and attacks on servers.',
            term: null,
            desc: 'The application allows you to view and manage logs from various systems. Track threats and attacks on these systems.',
            my_work: 'I made a system for searching logs and delivering them in real time to ClickHouse and Channels. He also worked on other components of the system. Developed aiochorm - asynchronous version of clickhouse_orm, this library is posted on github.',
            tags: [1,2,34,8,33,9],
            api: ['ATT&CK MITRE'],
            parsing: [],
            preview: 'atom/2.png',
            previews: ['atom/1.png', 'atom/2.png', 'atom/3.png']
        }
    ],
    openSource: [
        {
            title: 'Django REST Fast',
            link: 'https://github.com/qvp/django-rest-fast',
            short_desc: 'Fast create REST API with Swagger documentation based on native django views and forms.',
        },
        {
            title: 'aiochorm',
            link: 'https://github.com/qvp/aiochorm',
            short_desc: 'Asynchronous ORM for ClickHouse.',
        },
        {
            title: 'GO validation package',
            link: 'https://github.com/qvp/validation',
            short_desc: 'A package for validating data with advanced features.',
        },
    ],
    adjectives: ['machiavellian', 'mad', 'magnanimous', 'materialistic', 'martial', 'manipulative', 'majestic',
        'mature', 'maverick', 'meritorious', 'memorable', 'meticulous', 'miraculous', 'mirthful', 'monumental',
        'munificent', 'mystifying', 'marvelous', 'marvellous', 'modern'],
    nouns: ['developer', 'dancer', 'dark', 'daylight', 'deadline', 'dog', 'decorator', 'defender', 'demeanor',
        'demon', 'deployment', 'design', 'destiny', 'destroyer', 'devil', 'driver', 'duck', 'dynamite'],
    trans: {
        'code_examples': 'Code examples',
        'resume': 'Resume',
        'best_works': 'Best Projects',
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
};
