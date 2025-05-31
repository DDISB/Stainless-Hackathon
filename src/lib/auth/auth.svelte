<script lang="ts">
    let login = $state<string>()
</script>

<div class="main-container">
    <div class="auth-container">
        {login}
        <input bind:value={login} placeholder="Логин" type="emal">
        <input placeholder="Пароль" type="password">
        <button>Войти</button>
    </div>
</div>


<style>
    .main-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .auth-container {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

    }
    button {
        background-color: white;
        color: black    ;
    }


</style>