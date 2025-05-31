<script lang="ts">
  import Layout from './lib/layout/Layout.svelte';
  import AuthGuard from './lib/components/AuthGuard.svelte';
  import Auth from './lib/pages/Auth.svelte';
  import Register from './lib/pages/Register.svelte';
  import Cabinet from './lib/pages/Cabinet.svelte';
  import Subscription from './lib/pages/Subscription.svelte';
  import BuySubscription from './lib/pages/BuySubscription.svelte';

  type ComponentType = 'auth' | 'register' | 'cabinet' | 'subscription' | 'buy-subscription' | 'shop' | 'iron-pass' | 'profile';
  let currentComponent: ComponentType = 'auth';

  // Listen for navigation events
  window.addEventListener('navigate', ((event: CustomEvent<{ component: ComponentType }>) => {
    currentComponent = event.detail.component;
  }) as EventListener);
</script>

<main>
  {#if currentComponent === 'auth'}
    <Auth />
  {:else if currentComponent === 'register'}
    <Register />
  {:else}
    <Layout {currentComponent} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>