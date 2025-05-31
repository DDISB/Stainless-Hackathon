<script lang="ts">
    import { onMount } from 'svelte';
    import Catalog from '../pages/Сabinet.svelte';
    import IronPass from '../pages/IronPass.svelte';
    import Shop from '../pages/Shop.svelte';
    import Profile from '../pages/Profile.svelte';
    import Subscription from '../pages/Subscription.svelte';
    import TaskDetails from '../pages/TaskDetails.svelte';
    import type { TaskData } from '../interfaces';
    import cabinetIcon from '../../assets/cabinet.svg';
    import bonusIcon from '../../assets/bonus.svg';
    import shopIcon from '../../assets/shop.svg';
    import profileIcon from '../../assets/profile.svg';

    let activeComponent = 'catalog';
    let currentTaskData: TaskData | null = null;

    onMount(() => {
        window.addEventListener('navigate', ((e: CustomEvent<{component: string; taskData?: TaskData}>) => {
            if (e.detail.taskData) {
                currentTaskData = e.detail.taskData;
            }
            setActiveComponent(e.detail.component);
        }) as EventListener);
        
        return () => {
            window.removeEventListener('navigate', ((e: CustomEvent) => {
                setActiveComponent(e.detail.component);
            }) as EventListener);
        };
    });

    function setActiveComponent(component: string) {
        activeComponent = component;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout">
    <main class="content">
        {#if activeComponent === 'catalog'}
            <Catalog />
        {:else if activeComponent === 'iron-pass'}
            <IronPass />
        {:else if activeComponent === 'shop'}
            <Shop />
        {:else if activeComponent === 'profile'}
            <Profile />
        {:else if activeComponent === 'subscription'}
            <Subscription />
        {:else if activeComponent === 'task-details' && currentTaskData}
            <TaskDetails taskData={currentTaskData} />
        {/if}
    </main>

    <nav class="bottom-nav">
        <button class:active={activeComponent === 'catalog'} on:click={() => setActiveComponent('catalog')}>
            <img src={cabinetIcon} alt="Cabinet icon" />
            <span>Кабинет</span>
        </button>
        <button class:active={activeComponent === 'iron-pass'} on:click={() => setActiveComponent('iron-pass')}>
            <img src={bonusIcon} alt="Iron-Pass icon" />
            <span>Бонусы</span>
        </button>
        <button class:active={activeComponent === 'shop'} on:click={() => setActiveComponent('shop')}>
            <img src={shopIcon} alt="Shop icon" />
            <span>Магазин</span>
        </button>
        <button class:active={activeComponent === 'profile'} on:click={() => setActiveComponent('profile')}>
            <img src={profileIcon} alt="Profile icon" />
            <span>Профиль</span>
        </button>
    </nav>
</div>

<style>
    :global(body) {
        font-family: 'Lato', sans-serif;
    }

    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        font-family: 'Lato', sans-serif;
    }

    .content {
        flex: 1;
        padding: 24px;
        display: flex;
        background-color: #EFF2F7;
        flex-direction: column;
        align-items: center;
        padding-bottom: 84px;
    }

    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f8f9fa;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 100;
    }

    button {
        background: none;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 10px;
        transition: all 0.3s ease;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        color: #9299A699;
    }

    button img {
        width: 24px;
        height: 24px;
        opacity: 0.6;
        transition: opacity 0.3s ease;
    }

    button:hover {
        background-color: #e9ecef;
    }

    button:hover img {
        opacity: 1;
    }

    button.active {
        background-color: #e9ecef;
        color: #2B5BDA;
    }

    button.active img {
        opacity: 1;
    }
</style> 