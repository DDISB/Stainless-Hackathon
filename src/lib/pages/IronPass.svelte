<script lang="ts">
    import { onMount } from 'svelte';
    import { auth } from '../stores/auth';
    import Balance from '../components/Balance.svelte';
    import LevelProgression from '../components/LevelProgression.svelte';

    interface BattlePassLevel {
        right: {
            count: number;
        };
        left: {
            logo: string;
            text: string;
        };
    }

    interface BattlePassData {
        battelPass: Record<string, BattlePassLevel>;
    }

    let currentDate: string;
    let currentLevel = 12;
    let battlePassData: BattlePassData | null = null;
    let isLoading = false;
    let error: string | null = null;

    battlePassData = {
    battelPass: {
        "1": {
            right: { count: 10 },
            left: { logo: "", text: "" }
        },
        "2": {
            right: { count: 20 },
            left: { logo: "", text: "" }
        },
        "3": {
            right: { count: 30 },
            left: { logo: "", text: "" }
        },
        "4": {
            right: { count: 40 },
            left: { logo: "", text: "" }
        },
        "5": {
            right: { count: 50 },
            left: { logo: "prize", text: "Скидка при покупке в маркетплейсе" }
        },
        "6": {
            right: { count: 60 },
            left: { logo: "", text: "" }
        },
        "7": {
            right: { count: 70 },
            left: { logo: "", text: "" }
        },
        "8": {
            right: { count: 80 },
            left: { logo: "", text: "" }
        },
        "9": {
            right: { count: 90 },
            left: { logo: "", text: "" }
        },
        "10": {
            right: { count: 100 },
            left: { logo: "prize", text: "Скидка при заказе в доставке" }
        },
        "11": {
            right: { count: 110 },
            left: { logo: "", text: "" }
        },
        "12": {
            right: { count: 120 },
            left: { logo: "", text: "" }
        },
        "13": {
            right: { count: 130 },
            left: { logo: "", text: "" }
        },
        "14": {
            right: { count: 140 },
            left: { logo: "", text: "" }
        },
        "15": {
            right: { count: 150 },
            left: { logo: "prize", text: "Скидка на косметические услуги в салоне" }
        },
        "16": {
            right: { count: 160 },
            left: { logo: "", text: "" }
        },
        "17": {
            right: { count: 170 },
            left: { logo: "", text: "" }
        },
        "18": {
            right: { count: 180 },
            left: { logo: "", text: "" }
        },
        "19": {
            right: { count: 190 },
            left: { logo: "", text: "" }
        },
        "20": {
            right: { count: 200 },
            left: { logo: "prize", text: "Сертификат на парфюмерию" }
        },
        "21": {
            right: { count: 210 },
            left: { logo: "", text: "" }
        },
        "22": {
            right: { count: 220 },
            left: { logo: "", text: "" }
        },
        "23": {
            right: { count: 230 },
            left: { logo: "", text: "" }
        },
        "24": {
            right: { count: 240 },
            left: { logo: "", text: "" }
        },
        "25": {
            right: { count: 250 },
            left: { logo: "prize", text: "Участие в розыгрыше машины" }
        },
        "26": {
            right: { count: 260 },
            left: { logo: "", text: "" }
        },
        "27": {
            right: { count: 270 },
            left: { logo: "", text: "" }
        },
        "28": {
            right: { count: 280 },
            left: { logo: "", text: "" }
        },
        "29": {
            right: { count: 290 },
            left: { logo: "", text: "" }
        },
        "30": {
            right: { count: 300 },
            left: { logo: "prize", text: "Абонимент в фитнес центр на месяц" }
        }
    }
};

    // async function fetchBattlePass() {
    //     try {
    //         if (!$auth.user) {
    //             throw new Error('Пользователь не авторизован');
    //         }

    //         const response = await fetch('http://10.168.126.75:3000/api/battelPass/get', {
    //             headers: {
    //                 'Authorization': `Bearer ${$auth.token}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Ошибка получения данных: ${response.status}`);
    //         }

    //         battlePassData = await response.json();
    //         // console.log(battlePassData)
    //     } catch (err) {
    //         console.error('Ошибка при загрузке данных:', err);
    //         error = err instanceof Error ? err.message : 'Неизвестная ошибка';
    //     } finally {
    //         isLoading = false;
    //     }
    // }



    function formatDate(date: Date): string {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        
        return `${dayName}, ${day} ${month}`;
    }

    // onMount(fetchBattlePass);
    $: currentDate = formatDate(new Date());

    // Transform battle pass data for LevelProgression component
    $: bonuses = battlePassData ? Object.entries(battlePassData.battelPass).map(([level, data]) => ({
        level: parseInt(level),
        points: data.right.count,
        description: `Уровень ${level}`
    })) : [];

    $: prizes = battlePassData ? Object.entries(battlePassData.battelPass)
        .filter(([_, data]) => data.left.text)
        .map(([level, data]) => ({
            level: parseInt(level),
            name: data.left.text || 'Награда',
            description: ''
        })) : [];
</script>

<div class="main-container">
    <div class="header-wrapper">
        <div class="header">
            <div class="top-header">
                <div class="date">{currentDate}</div>
            </div>
            <div class="low-header">
                <h1>Карта бонусов</h1>
                <Balance points={2880} />
            </div>
        </div>
        <div class="header-gradient"></div>
    </div>

    <div class="content">
        <div class="content-block">
            {#if isLoading}
                <div class="loading">Загрузка данных...</div>
            {:else if error}
                <div class="error">{error}</div>
            {:else}
                <LevelProgression 
                    {currentLevel}
                    {bonuses}
                    {prizes}
                />
            {/if}
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
        padding-top: 74px; /* Высота хедера */
    }

    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        background: white;
    }

    .header {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        height: 74px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 12px 16px;
        background: white;
    }

    .header-gradient {
        position: absolute;
        bottom: -24px;
        left: 0;
        right: 0;
        height: 24px;
        background: linear-gradient(to bottom, white, transparent);
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
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

    .loading,
    .error {
        text-align: center;
        padding: 20px;
        background: white;
        border-radius: 12px;
    }

    .error {
        color: #dc3545;
        background: #ffe5e5;
    }
</style> 