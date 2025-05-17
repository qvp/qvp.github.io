SKILLS = [
    'Python', 'Golang', 'PHP', 'SQL', 'PostgreSQL', 'Apache Kafka', 'RabbitMQ', 'ClickHouse', 'Redis',
    'Microservice architecture', 'Concurrency', 'asyncio', 'multiprocessing', 'threading',
    'Code quality', 'Testing', 'SOLID', 'ООП',
    'FastAPI', 'SqlAlchemy', 'Alembic', 'pytest',
    'Rest API', 'GraphQL', 'Websockets', 'gRPC', 'Docker', 'Linux'
]

DATA = [
    {
        'company': 'B.ART',
        'company_link': 'bart-group.com',
        'position': 'Senior Python developer',
        'term': '1 year 1 month',
        'project_link': 'getcrypto.ru',
        'gallery': ['gallery/getcrypto/schema.png'],
        'title': 'Worked as the main backend developer in the team. Together we built a project from scratch in the fintech sector.',
        'desc': `
        • Designing project architecture with microservices separation<br>
        • Organizing inter-service communication using Apache Kafka<br>
        • Implementing the Transactional Outbox pattern in a microservice architecture<br>
        • Developing a core module for reuse across all microservices<br>
        • Implementing JWT-based authentication between services using Keycloak<br>
        • Setting up monitoring with Grafana, Prometheus, and Sentry<br>
        • Enabling two-factor authentication (2FA) via Google Authenticator, SMS, and email<br>
        • Collaborating with DevOps on CI/CD pipeline configuration<br>
        • Building a WebSocket-based notification system using Centrifugo<br>
        • Creating Docker and Docker Compose configurations<br>
        • Integrating with third-party services (Garantex & Swapster)<br>
        • Writing unit tests, load tests, and functional tests<br>
        • Ensuring code quality with pylint and other linters<br>
        • Conducting code reviews for other developers<br>
        `,
        'skills': ['Python', 'FastAPI', 'SqlAlchemy', 'Microservices', 'Asyncio', 'PostgreSQL', 'Apache Kafka', 'Redis', 'Keycloak', 'Centrifugo', 'pytest', 'Docker'],
        'page_break': true,
    },
    {
        'company': 'Scout Jobs',
        'company_link': null,
        'position': 'Senior Python developer',
        'term': '9 months',
        'project_link': 'scoutjobs.cc',
        'gallery': ['gallery/scoutjobs/schema.png'],
        'title': 'Worked as the main backend developer in the team. Participated in building a mass recruitment service from scratch.',
        'desc': `
        • Developed the project's microservice architecture<br>
        • Implemented real-time data synchronization mechanism<br>
        • Created a customizable JSON document field management system<br>
        • Built a data conflict detection and resolution system<br>
        • Developed a modular system for integration with external data sources<br>
        • Integrated with Google Sheets API, Helpdesk Eddy, Salesforce, and Amo CRM<br>
        • Designed a fault-tolerant and scalable system<br>
        • Implemented flexible synchronization scenarios (push & pull)<br>
        `,
        'skills': ['Python', 'FastAPI', 'SqlAlchemy', 'Microservices', 'Alembic', 'Asyncio', 'PostgreSQL', 'RabbitMQ', 'Multiprocessing', 'pytest', 'Docker'],
        'page_break': true,
    },
    {
        'company': 'SibEDGE',
        'company_link': 'sibedge.com',
        'position': 'Senior Python developer',
        'term': '1 year',
        'gallery': ['gallery/sibedge/schema.png', 'gallery/sibedge/1.png', 'gallery/sibedge/2.png'],
        'title': 'Worked as the main backend developer in the team. Contributed to building an energy sector platform from scratch.',
        'desc': `
        • Designed and implemented microservice architecture<br>
        • Developed distributed task processing system (workers) using RabbitMQ<br>
        • Enabled horizontal scaling across 50+ server cluster<br>
        • Built admin interface for task and worker management<br>
        • Optimized system performance and improved fault tolerance<br>
        • Implemented MongoDB as primary data storage<br>
        • Configured centralized log collection and analysis using ELK stack<br>
        • Created SDK for platform integration with third-party systems<br>
        • Achieved 85%+ code test coverage (unit, functional, load tests)<br>
        `,
        'skills': ['Python', 'FastAPI', 'MongoDB', 'Microservices', 'RabbitMQ', 'ELK', 'Multiprocessing', 'pytest', 'Docker'],
        'page_break': false,
    },
    {
        'company': 'Nekor',
        'company_link': 'nekor.ru',
        'position': 'Python developer',
        'term': '7 months',
        'gallery': ['gallery/nekor/schema.png', 'gallery/nekor/1.png', 'gallery/nekor/2.png', 'gallery/nekor/3.png', 'gallery/nekor/4.png', 'gallery/nekor/5.png', 'gallery/nekor/6.png'],
        'title': 'Built a monetization platform for API access targeting business clients from scratch for nekor.ru.',
        'desc': `
        • Implemented high-performance proxy service on aiohttp for API request routing<br>
        • Designed scalable microservice architecture<br>
        • Developed client portal with API subscription and payment functionality<br>
        • Created admin panel for API resources and user management<br>
        • Built automated API documentation generation system<br>
        • Configured request statistics collection and analytics using ClickHouse<br>
        • Implemented asynchronous architecture to ensure high performance<br>
        `,
        'skills': ['Python', 'aiohttp', 'asyncio', 'SqlAlchemy Core', 'PostgreSQL', 'ClickHouse', 'Redis', 'Microservices', 'Django', 'pytest', 'Docker'],
        'page_break': true,
    },
    {
        'company': 'Atom Secure',
        'company_link': null,
        'position': 'Python developer',
        'term': '1 year',
        'gallery': ['gallery/atomsecure/1.png', 'gallery/atomsecure/2.png', 'gallery/atomsecure/3.png'],
        'title': 'Participated in the creation of a solution for log analysis and detection of cyber threats in real time.',
        'desc': `
        • Designed system architecture and selected technology stack<br>
        • Developed real-time log search and processing mechanism<br>
        • Implemented data storage and analytics in ClickHouse<br>
        • Created <a href="https://github.com/qvp/aiochorm" target="_blank">aiochorm</a> – an asynchronous ORM for ClickHouse<br>
        • Built REST API for system interaction<br>
        • Integrated Django REST Framework with ClickHouse ORM<br>
        • Actively participated in cross-code reviews<br>
        • Ensured test coverage for developed modules<br>
        `,
        'skills': ['Python', 'PostgreSQL', 'ClickHouse', 'Redis', 'Django', 'DRF', 'Channels', 'Celery', 'unittest', 'Docker', 'asyncio'],
        'page_break': false,
    },
    {
        'company': 'Wiki Item',
        'company_link': null,
        'project_link': 'wikiitem.com',
        'position': 'PHP developer',
        'term': '1 year 3 months',
        'gallery': ['gallery/wikiitem/1.png', 'gallery/wikiitem/2.png', 'gallery/wikiitem/3.png', 'gallery/wikiitem/4.png', 'gallery/wikiitem/5.png'],
        'title': 'Built a marketplace from scratch combining features of Yandex Market and Wikipedia. The platform aggregates product data from AliExpress, Yandex Market, and Amazon, while allowing users to add or edit product listings in exchange for reputation points. Every change creates a new version, with full version history accessible through the interface.',
        'desc': `
        • Designed database structure containing 40+ tables<br>
        • Database stores over 500,000 product listings<br>
        • Created and optimized complex SQL queries<br>
        • Developed project architecture with independent microservices<br>
        • Implemented version control mechanism for change rollbacks<br>
        • Built Yandex Market product parser<br>
        • Developed tool for image collection from Google Images<br>
        • Configured field mapping system for parsed data processing and transformation<br>
        • Optimized database and code performance to reduce response time<br>
        • Created four additional microservices for the project<br>
        • Integrated APIs from Ebay, Amazon, Aliexpress, YouTube and Yandex Market<br>
        `,
        'skills': ['SQL', 'PostgreSQL', 'Microservices', 'PHP', 'Laravel framework', 'Slim', 'tests'],
        'page_break': true,
    },
    {
        'company': 'Astrologiko',
        'company_link': null,
        'project_link': 'astrologiko.com',
        'position': 'PHP developer',
        'term': '8 months',
        'gallery': ['gallery/astrologiko/1.png', 'gallery/astrologiko/2.png', 'gallery/astrologiko/3.png', 'gallery/astrologiko/4.png', 'gallery/astrologiko/5.png', 'gallery/astrologiko/6.png', 'gallery/astrologiko/7.png', 'gallery/astrologiko/8.png', 'gallery/astrologiko/9.png'],
        'title': 'Built a personalized horoscope generation platform from scratch. Offers both free and premium versions with extended features. Users can pay to chat with astrologers via integrated online chat. Includes admin dashboard functionality.',
        'desc': `
        • Personalized horoscope generation based on planetary positions<br>
        • Real-time chat with astrologers using WebSocket protocol<br>
        • Payment processing with automated tax receipt submission<br>
        • User subscription management system<br>
        • Planetary coordinate data aggregation from multiple sources<br>
        • Admin panel for managing users, astrologers, and chat sessions<br>
        • Contact import and email invitation functionality<br>
        • Automated natal chart generation through code<br>
        • Tarot card mini-game feature<br>
        `,
        'skills': ['SQL', 'MySQL', 'Websockets', 'PHP', 'Laravel framework', 'tests'],
        'page_break': false,
    },
    {
        'company': 'SimLead',
        'company_link': null,
        'position': 'PHP developer',
        'term': '2 years 2 months',
        'title': 'Worked as a full-time developer at an outsourcing company, contributing to multiple client projects.',
        'desc': `
        <a href="https://textdeliver.com" target="_blank">textdeliver.com</a> - Platform for creating SMS/email campaigns and automated phone calls. Served as lead developer. Integrated APIs: Twilio, CallRail, CallFire, Mailchimp.<br>
        <br>
        <a href="https://pressplay.io" target="_blank">pressplay.io</a> - Video landing page builder. Implemented new features and provided maintenance. Integrated AWS API for file storage.<br>
        <br>
        <a href="https://a2xanxiety.com" target="_blank">a2xanxiety.com</a> - E-commerce store with CRM system. Developed from scratch.<br>
        `,
        'skills': ['SQL', 'MySQL', 'MongoDB', 'PHP', 'Laravel framework', 'tests'],
        'page_break': true,
    },
    {
        'company': 'ChoPochom',
        'company_link': 'chopochom.com',
        'position': 'PHP developer',
        'term': '8 months',
        'title': 'Built from scratch an automation platform for managing Yandex.Direct contextual advertising campaigns for «Chopochom» marketing agency.',
        'desc': `
        • Designed a database with 30+ tables<br>
        • Wrote and optimized complex SQL queries<br>
        • Developed a background task manager (similar to Celery + Flower)<br>
        • Implemented full integration with Yandex Direct API<br>
        • Integrated payment systems: WebMoney, Yandex Money<br>
        • Created database structure containing 30+ tables<br>
        • Built and improved complex SQL queries<br>
        • Implemented background task management system (comparable to Celery + Flower)<br>
        • Established complete application interaction with Yandex Direct<br>
        • Connected payment services: WebMoney and Yandex Money<br>
        `,
        'skills': ['SQL', 'MySQL', 'PHP', 'Yii framework'],
        'page_break': false,
    },
];
