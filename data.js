const category = {
    games: 'Игры',
    kino: 'Кино',
    curses: 'Курсы',
    socialSites: 'Соц-Сети',
    cryptoBurzy: 'Крипто-биржи'
}

const cardsData = [
    {
        src: './img/cs-go.jpeg',
        id: 1,
        title: 'Counter-strike Global Offensive',
        desc: 'CS:GO (Counter-Strike: Global Offensive) - это один из самых популярных шутеров нашего времени.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '7',
            country: 'Америка',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/cinema.jpg',
        id: 2,
        title: 'Сериал "Как избежать наказания за убийство"',
        desc: 'Миссис Китинг – замечательный адвокат. Она учит студентов удивительной дисциплине. Эннализ рассказывает молодежи, как избегать наказаний за совершенные убийства. Студенты Китинг даже представить себе не могут, что совсем скоро свои знания они будут применять на практике в реальной жизни…',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '6',
            country: 'Америка',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/binance-logo.jpg',
        id: 3,
        title: 'Binance',
        desc: 'Криптовалютная биржа Binance — мы управляем крупнейшей в мире биржей по объему торгов биткоинами и альткоинами.',
        params:{
            pastime: 'Инвестиции',
            category: category.cryptoBurzy,
            personalRating: '8',
            country: 'Китай',
            cost: 'Не продаётся'
        }

    },
    {
        src: './img/anime.jpg',
        id: 4,
        title: 'Anime',
        desc: 'Клинок, рассекающий демонов — манга авторства Коёхару Готогэ, выпускавшаяся в журнале Weekly Shonen Jump издательства Shueisha с 15 февраля 2016 года по 18 мая 2020 годаыы',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '9',
            country: 'Япония',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/dota-2.jpeg',
        id: 5,
        title: 'Dota 2',
        desc: 'CS:GO (Counter-Strike: Global Offensive) - это один из самых популярных шутеров нашего времени.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '8',
            country: 'Америка',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/skillbox-logo.jpg',
        id: 6,
        title: 'Skillbox',
        desc: '— российская интернет-компания, работающая в сфере онлайн-образования, основана в 2016 году, входит в образовательный холдинг Skillbox Holding Limited.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '5',
            country: 'Россия',
            cost: '30000₽'
        }

    },    {
        src: './img/huobi-logo.jpg',
        id: 7,
        title: 'Huobi Global',
        desc: 'Huobi — одна из ведущих криптобирж в мире. Здесь, на Huobi, вы можете быстро и легко покупать и продавать Биткоины и другие криптовалюты.',
        params:{
            pastime: 'Инвестиции',
            category: category.cryptoBurzy,
            personalRating: '9',
            country: 'Китай',
            cost: 'Не продаётся'
        }

    },
    {
        src: './img/instagram-logo.jpg',
        id: 8,
        title: 'Instagram',
        desc: 'Instagram — американская социальная сеть для обмена фотографиями и видео, основанная Кевином Систромом и Майком Кригером.',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '6',
            country: 'Америка',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/skyeng-logo.jpg',
        id: 9,
        title: 'Skyeng',
        desc: 'Skyeng — российская онлайн-школа по изучению английского языка. Обучение производит на учебной платформе Vimbox, а также при помощи мобильного приложения, расширений для браузера и обучающих рассылок.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '4',
            country: 'Россия',
            cost: '20000₽'
        }

    },
    {
        src: './img/telegram-logo.jpg',
        id: 10,
        title: 'Telegram',
        desc: 'Telegram — кроссплатформенная система мгновенного обмена сообщениями с функциями обмениваться текстовыми, голосовыми и видеосообщениями, стикерами и фотографиями, файлами многих форматов.',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '10',
            country: 'Германия',
            cost: 'Не продаётся'
        }

    },
    {
        src: './img/the-sims-3.jpg',
        id: 11,
        title: 'The Sims',
        desc: 'The Sims — серия компьютерных игр в жанре симулятор жизни, разработанная геймдизайнером Уиллом Райтом и такими компаниями как Maxis и The Sims Studio и изданная компанией Electronic Arts.',
        params:{
            pastime: 'Отдых',
            category: category.games,
            personalRating: '5',
            country: 'Китай',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/geekbrains.jpg',
        id: 12,
        title: 'Geekbrains',
        desc: 'Крупнейший образовательный портал, входящий в состав Mail.ru Group. Все обучение проходит в удобном онлайн-формате. Гарантируют стажировку и последующее трудоустройство, работает система наставничества на каждом этапе обучения.',
        params:{
            pastime: 'Учеба',
            category: category.curses,
            personalRating: '4',
            country: 'Россия',
            cost: '45000₽'
        }

    },
    {
        src: './img/tik-tok-llogo.jpeg',
        id: 13,
        title: 'Tik Tok',
        desc: 'TikTok — сервис для создания и просмотра коротких видео, принадлежащий пекинской компании «ByteDance».',
        params:{
            pastime: 'Отдых',
            category: category.socialSites,
            personalRating: '5',
            country: 'Китай',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/marvel.jpeg',
        id: 13,
        title: 'Marvel',
        desc: 'Marvel Comics — торговая марка и главный актив Marvel Worldwide Inc. издающий комиксы. Подразделение компании Marvel Entertainment.',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '10',
            country: 'Америка',
            cost: 'Бесплатно'
        }

    },
    {
        src: './img/bumajniy-dom.jpeg',
        id: 13,
        title: 'Бумажный дом',
        desc: '«Бума́жный дом» — это испанский криминальный, драматический телесериал об ограблении, созданный Алексом Пиной.',
        params:{
            pastime: 'Отдых',
            category: category.kino,
            personalRating: '10',
            country: 'Испания',
            cost: 'Бесплатно'
        }

    }
]