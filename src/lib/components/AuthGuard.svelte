<script lang="ts">
    import { onMount } from 'svelte';
    import { auth } from '../stores/auth';
    import { navigate } from '../utils/navigation';
    import Cabinet from '../pages/Cabinet.svelte';
    import Subscription from '../pages/Subscription.svelte';
    import BuySubscription from '../pages/BuySubscription.svelte';

    export let component: 'cabinet' | 'subscription' | 'buy-subscription';

    const components = {
        'cabinet': Cabinet,
        'subscription': Subscription,
        'buy-subscription': BuySubscription
    } as const;

    onMount(() => {
        auth.initialize();
    });

    $: if (!$auth.isAuthenticated) {
        navigate('auth');
    }

    $: currentComponent = components[component];
</script>

{#if $auth.isAuthenticated && currentComponent}
    <svelte:component this={currentComponent} />
{/if}

<style>
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 18px;
        color: #313E56;
    }
</style> 