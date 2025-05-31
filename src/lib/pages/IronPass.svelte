<script lang="ts">
// Пример данных для шагов бонусов
const steps = [
    // 1. Спортивно-оздоровительные комплексы (СОКи)
    {
        id: 1,
        title: "Первая пробная тренировка",
        description: "Посетите любую групповую тренировку (йога, аквааэробика, функционал) в СОКе.",
        partnerImg: '', // сюда вставить путь к картинке СОКа
        reward: "Скидка 20% на абонемент или бесплатный гостевой визит в сауну",
        completed: true,
        points: 15
    },
    {
        id: 2,
        title: "Семейный заплыв",
        description: "Сходите в бассейн СОКа с ребенком (или другим членом семьи).",
        partnerImg: '',
        reward: "Пакетик бесплатного чая/кофе в фитнес-баре или скидка на детский абонемент",
        completed: true,
        points: 15, 
    },
    {
        id: 3,
        title: "День СПА-ритуала",
        description: "Посетите любую СПА-процедуру (массаж, обертывание) длительностью от 60 мин.",
        partnerImg: '',
        reward: "+10% кешбека 'Железками' от стоимости или бесплатный скраб для тела",
        completed: true,
        points: 15, 
    },
    {
        id: 4,
        title: "Термо-марафон",
        description: "Посетите сауну/хаммам в СОКе 3 раза в месяц.",
        partnerImg: '',
        reward: "4-й визит в сауну бесплатно или скидка на аренду VIP-зала",
        completed: false,
        points: 15, 
    },
    {
        id: 5,
        title: "Фото-челлендж у бассейна",
        description: "Сделайте фото (без лиц других посетителей) в зоне отдыха бассейна и выложите с хештегом #НазваниеСОКа #ЧекЛистПлюс (опционально).",
        partnerImg: '',
        reward: "Бесплатный смузи или 50 'Железок'",
        completed: false,   
        points: 15, 
    },

    // 2. Спортивные залы (фитнес-клубы, студии)
    {
        id: 6,
        title: "Пробуем новое",
        description: "Посетите вводное занятие в НОВОМ для вас направлении (пилатес, кроссфит, танцы).",
        partnerImg: '',
        reward: "Скидка 15% на следующий месяц абонемента или бесплатная персональная консультация тренера",
        completed: false,
        points: 15, 
    },
    {
        id: 7,
        title: "Утренний заряд",
        description: "Посетите 5 утренних тренировок (до 11:00) за месяц.",
        partnerImg: '',
        reward: "Бесплатный спортивный напиток/батончик или +100 'Железок'",
        completed: false,   
        points: 15, 
    },
    {
        id: 8,
        title: "Приведи друга (в зал)",
        description: "Придите на тренировку с другом, который не является членом клуба (и он купит хотя бы разовое посещение).",
        partnerImg: '',
        reward: "Доп. бесплатный день/неделя к вашему абонементу или скидка 500 руб. на следующий платеж",
        completed: false,
        points: 15, 
    },
    {
        id: 9,
        title: "Чек-ин на ресепшн",
        description: "Просто зайдите в клуб и отсканируйте QR-код у ресепшна в течение дня (даже без тренировки).",
        partnerImg: '',
        reward: "5-10 'Железок' или скидка 5% в фитнес-баре",
        completed: false,
        points: 15, 
    },

    // 3. Клининговые компании
    {
        id: 10,
        title: "Пробный удар по грязи",
        description: "Закажите первую уборку (генеральную или после ремонта) у компании.",
        partnerImg: '',
        reward: "Скидка 25% на первую уборку или бесплатная химчистка 1 ковра/дивана",
        completed: false,
        points: 15, 
    },
    {
        id: 11,
        title: "Регулярность = чистота + выгода",
        description: "Закажите комплексную уборку 3 раза подряд с периодичностью раз в 2 недели/месяц.",
        partnerImg: '',
        reward: "4-я уборка со скидкой 50% или набор экологичных чистящих средств в подарок",
        completed: false,
        points: 15, 
    },
    {
        id: 12,
        title: "Оконный взгляд",
        description: "Закажите мойку окон в квартире.",
        partnerImg: '',
        reward: "Бесплатная чистка 1 люстры или +300 'Железок'",
        completed: false,
        points: 15, 
    },
    {
        id: 13,
        title: "Доверие соседа",
        description: "Порекомендуйте услуги компании соседу по ЖК (он должен указать ваш ник/квартиру при заказе).",
        partnerImg: '',
        reward: "Скидка 10% на вашу следующую уборку или бонусные 'Железки' (когда сосед выполнит свой первый заказ)",
        completed: false,
        points: 15, 
    },

    // 4. Аптеки
    {
        id: 14,
        title: "Здоровый запас",
        description: "Купите любой витаминный комплекс или БАД на сумму от 500 руб.",
        partnerImg: '',
        reward: "Подарочный набор пробников (крем, салфетки) или скидка 10% на следующую покупку витаминов",
        completed: false,
        points: 15, 
    },
    {
        id: 15,
        title: "Измерь давление",
        description: "Придите в аптеку и воспользуйтесь бесплатным тонометром (измерьте давление).",
        partnerImg: '',
        reward: "10-20 'Железок' или скидка 5% на покупку лекарств от давления/сердца в этот день",
        completed: false,
        points: 15, 
    },
    {
        id: 16,
        title: "Аптечка первой необходимости",
        description: "Купите набор из 3-5 позиций из списка 'Аптечка дома' (бинт, пластырь, жаропонижающее, сорбент).",
        partnerImg: '',
        reward: "Дополнительный антисептик в подарок или +50 'Железок'",
        completed: false,
        points: 15, 
    },
    {
        id: 17,
        title: "Лояльный покупатель",
        description: "Совершите покупки в аптеке на сумму >1000 руб. 3 раза в месяц.",
        partnerImg: '',
        reward: "Карта постоянного клиента со скидкой 3% или бесплатная доставка следующего заказа",
        completed: false,
        points: 15, 
    },

    // 5. Заведения общепита
    {
        id: 18,
        title: "Кофейный старт дня",
        description: "Купите любой кофе навынос до 11 утра.",
        partnerImg: '',
        reward: "Плюшка/печенье в подарок к следующему кофе или скидка 10% на завтрак",
        completed: false,
        points: 15, 
    },
    {
        id: 19,
        title: "Семейный ужин вне дома",
        description: "Посетите заведение с семьей (минимум 2 взрослых + 1 ребенок) и сделайте заказ от 1500 руб.",
        partnerImg: '',
        reward: "Детское мороженое/десерт бесплатно или скидка 15% на следующий семейный визит",
        completed: false,
        points: 15, 
    },
    {
        id: 20,
        title: "Новинка недели",
        description: "Закажите блюдо/напиток из раздела 'Новинки'.",
        partnerImg: '',
        reward: "Небольшой дегустационный сет или +30 'Железок'",
        completed: false,
        points: 15, 
    },
    {
        id: 21,
        title: "Онлайн-заказ с доставкой",
        description: "Сделайте первый заказ через сайт/приложение партнера с доставкой.",
        partnerImg: '',
        reward: "Скидка 20% на первый онлайн-заказ или бесплатная доставка следующего заказа",
        completed: false,
        points: 15, 
    },
    {
        id: 22,
        title: "Фото-отзыв с настроением",
        description: "Сделайте фото блюда в заведении и выложите в соцсети/оставьте отзыв в приложении (с тегом).",
        partnerImg: '',
        reward: "Чашка капучино/чай в подарок или 50 'Железок'",
        completed: false,
        points: 15, 
    },

    // 6. Продуктовые магазины
    {
        id: 23,
        title: "Здоровый чек",
        description: "Купите 3 продукта из категории 'ЗОЖ' (йогурт без сахара, хлебцы, фрукты).",
        partnerImg: '',
        reward: "Скидка 10% на следующий ЗОЖ-продукт или набор фруктовых чипсов",
        completed: false,
        points: 15, 
    },
    {
        id: 24,
        title: "Попробуй местное",
        description: "Купите товар местного производителя (сыр, молоко, хлеб).",
        partnerImg: '',
        reward: "Небольшой образец другого местного продукта или +25 'Железок'",
        completed: false,
        points: 15, 
    },
    {
        id: 25,
        title: "Пакет в пользу экологии",
        description: "Придите за покупками со своей экосумкой/пакетом.",
        partnerImg: '',
        reward: "Небольшая скидка на покупку (1-2%) или бонусные 'Железки' (10-15)",
        completed: false,
        points: 15, 
    },
    {
        id: 26,
        title: "Акция недели х2",
        description: "Купите товар из текущей акции магазина.",
        partnerImg: '',
        reward: "Дополнительная скидка 5% на этот товар или мини-подарок (шоколадка)",
        completed: false,
        points: 15, 
    },
    {
        id: 27,
        title: "Ночной шоппинг",
        description: "Сделайте покупки в магазине после 22:00 на сумму от 1000 руб.",
        partnerImg: '',
        reward: "Двойные баллы за покупку или специальная ночная скидка 7%",
        completed: false,
        points: 30
    },
    {
        id: 28,
        title: "Сезонная корзина",
        description: "Купите набор сезонных овощей/фруктов (минимум 3 вида) в один чек.",
        partnerImg: '',
        reward: "Дополнительный сезонный фрукт в подарок или +40 'Железок'",
        completed: false,
        points: 40
    },
    {
        id: 29,
        title: "Готовим дома",
        description: "Купите все ингредиенты для одного из рецептов недели (список в приложении).",
        partnerImg: '',
        reward: "Рецепт от шеф-повара в подарок или скидка 15% на следующую покупку специй",
        completed: false,
        points: 35
    },
    {
        id: 30,
        title: "Праздничный запас",
        description: "Сделайте предзаказ праздничной корзины за неделю до праздника.",
        partnerImg: '',
        reward: "Праздничное оформление корзины бесплатно или +100 'Железок'",
        completed: false,
        points: 100
    },
];

// Текущие баллы пользователя
let currentPoints = 2880;

// Функция для определения статуса линии между кругами
function getLineStatus(currentIndex: number, steps: any[]) {
    if (currentIndex >= steps.length - 1) return false;
    
    const currentStep = steps[currentIndex];
    const nextStep = steps[currentIndex + 1];
    
    // Линия активна, если текущий шаг выполнен
    if (currentStep.completed) return 'completed';
    // Линия в процессе, если текущий шаг активен
    if (currentStep.active) return 'active';
    // Иначе линия неактивна
    return 'inactive';
}

// Функция для определения позиции карточки (премиум - слева)
function isLeftPosition(index: number): boolean {
    return (index + 1) % 5 === 0; // каждое пятое задание слева (премиум)
}

// Функция для вычисления процента выполнения
function calculateProgress(steps: any[]): number {
    const completedCount = steps.filter(step => step.completed).length;
    return (completedCount / steps.length) * 100;
}
</script>

<div class="page-container">
    <div class="container">
        <header class="header">
            <h1>Карта бонусов</h1>
            <div class="points">
                {currentPoints} <span class="points-icon">💎</span>
            </div>
        </header>

        <div class="timeline-container">
            <!-- Линия прогресса -->
            <div class="progress-track">
                <div class="progress-line">
                    <div class="progress-fill" style="height: {calculateProgress(steps)}%"></div>
                </div>
                <div class="progress-circles">
                    {#each steps as step, index}
                        <div class="circle-wrapper" style="top: {index * 320}px">
                            <div class="circle {step.completed ? 'completed' : ''}">{step.id}</div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Карточки заданий -->
            <div class="tasks-container">
                {#each steps as step, index}
                    <div class="step-container {isLeftPosition(index) ? 'left' : 'right'}">
                        <div class="bonus-card">
                            <div class="icon-container">
                                {#if step.partnerImg}
                                    <img src={step.partnerImg} alt="Партнер" class="partner-img"/>
                                {:else}
                                    <div class="img-placeholder"></div>
                                {/if}
                            </div>
                            <div class="bonus-info">
                                <p class="bonus-title">{step.title}</p>
                                <p class="bonus-description">{step.description}</p>
                                <div class="points-badge">+{step.points} 💎</div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <button class="view-rewards">
            Посмотреть награды
        </button>
    </div>
</div>

<style>
    .page-container {
        width: 100%;
        min-height: 100vh;
        background-color: #f8f9fa;
        display: flex;
        justify-content: center;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 0 2rem;
    }

    .header {
        width: 100%;
        padding: 1.5rem 0;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        position: sticky;
        top: 0;
        z-index: 10;
        margin-bottom: 2rem;
    }

    .points {
        background: #2563eb;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        font-size: 1.1rem;
    }

    .timeline-container {
        position: relative;
        padding: 3rem 1rem;
        flex: 1;
        width: 100%;
        max-width: 1200px;
        overflow-x: hidden;
    }

    .progress-track {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 12px;
        transform: translateX(-50%);
        z-index: 1;
    }

    .progress-line {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #e0e7ff;
        border-radius: 6px;
    }

    .progress-fill {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 40%;
        background: #2563eb;
        border-radius: 6px;
        transition: height 0.3s ease;
    }

    .progress-circles {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .circle-wrapper {
        position: absolute;
        left: 0;
        width: 100%;
        height: 320px; /* Увеличенная высота между кругами */
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 60px; /* Увеличенный отступ сверху для круга */
    }

    .circle {
        width: 64px;
        height: 64px;
        background: white;
        border: 5px solid #2563eb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.75rem;
        color: #2563eb;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 12px rgba(37,99,235,0.1);
        z-index: 2;
        transition: all 0.3s ease;
    }

    .circle.completed {
        background: #2563eb;
        color: white;
    }

    .tasks-container {
        position: relative;
        margin-top: -80px; /* Компенсируем отступ первого элемента */
    }

    .step-container {
        position: relative;
        height: 320px; /* Увеличенная высота контейнера */
        display: flex;
        align-items: flex-start;
        width: 100%;
        padding-top: 60px; /* Увеличенный отступ сверху для карточки */
    }

    .step-container.right {
        justify-content: flex-start;
        padding-left: calc(50% + 64px); /* Увеличенный отступ от центра */
        padding-right: 48px;
    }

    .step-container.left {
        justify-content: flex-end;
        padding-right: calc(50% + 64px); /* Увеличенный отступ от центра */
        padding-left: 48px;
        flex-direction: row-reverse;
    }

    .bonus-card {
        background: white;
        border-radius: 24px;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        box-shadow: 0 2px 12px rgba(37,99,235,0.08);
        width: calc(100% - 120px);
        max-width: 600px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin-bottom: 60px; /* Увеличенный отступ снизу */
    }

    .bonus-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(37,99,235,0.12);
    }

    .icon-container {
        width: 56px;
        height: 56px;
        background: #f0f4f8;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .bonus-info {
        flex: 1;
    }

    .bonus-title {
        margin: 0;
        font-weight: 600;
        color: #1a1a1a;
        font-size: 1.25rem;
    }

    .bonus-description {
        margin: 0.75rem 0;
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.5;
    }

    .points-badge {
        display: inline-flex;
        align-items: center;
        background: #2563eb;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        margin-top: 0.75rem;
        font-size: 1rem;
        font-weight: 500;
    }

    .view-rewards {
        width: 100%;
        max-width: 480px;
        margin: 2rem 0;
        padding: 1rem;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 16px;
        font-size: 1.25rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;
    }

    .view-rewards:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
    }

    @media (max-width: 1200px) {
        .bonus-card {
            width: calc(100% - 80px);
            padding: 1.25rem 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .step-container {
            height: auto;
            min-height: 320px;
            padding-top: 40px;
        }

        .circle-wrapper {
            height: 320px;
            padding-top: 40px;
        }

        .step-container.left,
        .step-container.right {
            padding-left: 96px;
            padding-right: 24px;
            justify-content: flex-start;
            flex-direction: row;
        }

        .bonus-card {
            width: calc(100% - 48px);
            max-width: none;
            margin-bottom: 40px;
            padding: 1.25rem 1.5rem;
        }
    }
</style> 