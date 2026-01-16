const {createApp, ref, computed, onMounted, onUnmounted} = Vue;

createApp({
    setup() {
        // Реактивные переменные
        const activeSection = ref('about');
        const showBackToTop = ref(false);
        const modalActive = ref(false);
        const modalImage = ref('');

        // Функция для получения тега по ID
        const getTagById = (id) => {
            const tag = DATA.tags.find(tag => tag.id === id);
            return tag ? tag.title : `Unknown (${id})`;
        };

        // Функция возвращающая отфильтрованный список всех тегов
        const getTagsFiltered = () => {
            return this.DATA.tags.filter(tag => {
                return tag.hide === false || tag.hide === undefined || tag.hide === null
            })
        };

        // Функции
        const scrollTo = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        const openModal = (img) => {
            modalImage.value = img;
            modalActive.value = true;
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modalActive.value = false;
            document.body.style.overflow = 'auto';
        };

        const handleScroll = () => {
            // Определяем активную секцию
            const sections = ['about', 'skills', 'projects', 'opensource', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        activeSection.value = section;
                        break;
                    }
                }
            }

            // Показываем/скрываем кнопку "Наверх"
            showBackToTop.value = window.scrollY > 500;
        };

        // Хуки жизненного цикла
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Инициализация при загрузке
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        // Возвращаем данные и методы
        return {
            DATA,
            activeSection,
            showBackToTop,
            modalActive,
            modalImage,
            getTagById,
            scrollTo,
            scrollToTop,
            openModal,
            closeModal,
            getTagsFiltered,
        };
    }
}).mount('#app');
