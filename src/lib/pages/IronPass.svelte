<script lang="ts">
    import Balance from '../components/Balance.svelte';
    import LevelProgression from '../components/LevelProgression.svelte';
    import type { Bonus, Prize } from '../interfaces';

    let currentDate: string;
    let currentLevel = 12; // Example current level

    const bonuses: Bonus[] = Array.from({ length: 30 }, (_, i) => ({
        level: i + 1,
        points: (i + 1) * 10,
        description: `Бонус ${i + 1} уровня`
    }));

    const prizes: Prize[] = [
        {
            level: 5,
            name: 'Бесплатное посещение',
            description: 'Море Парк',
            image: '/images/more-park.png'
        },
        {
            level: 15,
            name: 'Промокод на 1000 руб',
            description: 'В магазине',
            image: '/images/promo.png'
        },
        {
            level: 30,
            name: '+50% скидка',
            description: 'От 700 руб',
            image: '/images/discount.png'
        }
    ];

    function formatDate(date: Date): string {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        
        return `${dayName}, ${day} ${month}`;
    }

    $: currentDate = formatDate(new Date());
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Карта бонусов</h1>
            <Balance points={2880} />
        </div>
    </div>

    <div class="content">
        <div class="content-block">
            <LevelProgression 
                {currentLevel}
                {bonuses}
                {prizes}
            />
        </div>
    </div>
</div>

<style>
    .main-container {
        max-width: 1000px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
    }

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .low-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
    }

    .date {
        font-size: 12px;
        color: #6c757d;
    }

    .content-block {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style> 