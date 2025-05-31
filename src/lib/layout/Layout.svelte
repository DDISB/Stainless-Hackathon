<script lang="ts">
    import { onMount } from 'svelte';
    import Catalog from '../pages/Сabinet.svelte';
    import IronPass from '../pages/IronPass.svelte';
    import Shop from '../pages/Shop.svelte';
    import Profile from '../pages/Profile.svelte';
    import Subscription from '../pages/Subscription.svelte';
    import TaskDetails from '../pages/TaskDetails.svelte';
    import type { TaskData } from '../interfaces';

    let activeComponent = 'catalog';
    let isMobile = false;
    let currentTaskData: TaskData | null = null;

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('navigate', ((e: CustomEvent<{component: string; taskData?: TaskData}>) => {
            if (e.detail.taskData) {
                currentTaskData = e.detail.taskData;
            }
            setActiveComponent(e.detail.component);
        }) as EventListener);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('navigate', ((e: CustomEvent) => {
                setActiveComponent(e.detail.component);
            }) as EventListener);
        };
    });

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }

    function setActiveComponent(component: string) {
        activeComponent = component;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout">
    {#if !isMobile}
        <nav class="desktop-nav">
            <button class:active={activeComponent === 'catalog'} on:click={() => setActiveComponent('catalog')}>
                Кабинет 
            </button>
            <button class:active={activeComponent === 'iron-pass'} on:click={() => setActiveComponent('iron-pass')}>
                Iron-Pass
            </button>
            <button class:active={activeComponent === 'shop'} on:click={() => setActiveComponent('shop')}>
                Магазин
            </button>
            <button class:active={activeComponent === 'profile'} on:click={() => setActiveComponent('profile')}>
                Профиль
            </button>
        </nav>
    {/if}

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

    {#if isMobile}
        <nav class="mobile-nav">
            <button class:active={activeComponent === 'catalog'} on:click={() => setActiveComponent('catalog')}>
                Кабинет
            </button>
            <button class:active={activeComponent === 'iron-pass'} on:click={() => setActiveComponent('iron-pass')}>
                Iron-Pass
            </button>
            <button class:active={activeComponent === 'shop'} on:click={() => setActiveComponent('shop')}>
                Магазин
            </button>
            <button class:active={activeComponent === 'profile'} on:click={() => setActiveComponent('profile')}>
                Профиль
            </button>
        </nav>
    {/if}
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
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        width: 100%;
    }

    .desktop-nav {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .mobile-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
    }

    button {
        background: none;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        border-radius: 8px;
    }

    button:hover {
        background-color: #e9ecef;
    }

    button.active {
        background-color: #e9ecef;
        color: #0d6efd;
    }

    @media (max-width: 768px) {
        .content {
            padding-bottom: 70px;
        }
    }
</style> 