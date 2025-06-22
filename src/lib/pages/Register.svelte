<script lang="ts">
    import { auth } from '../stores/auth';
    import { register } from '../utils/api';
    import { navigate } from '../utils/navigation';
    
    let phone = '';
    let name = '';
    let floor = '';
    let apartment = '';
    let password = '';
    let error = '';
    let loading = false;

    function formatPhoneNumber(value: string) {
        // Убираем все нецифровые символы и +7 в начале
        let digits = value.replace(/\D/g, '').replace(/^7/, '');
        
        // Если пустая строка, возвращаем пустую строку
        if (!digits) {
            return '';
        }

        // Ограничиваем до 10 цифр
        digits = digits.slice(0, 10);

        // Форматируем номер
        let result = '+7';
        
        // Добавляем скобки для кода
        if (digits.length > 0) {
            result += ' (';
            result += digits.slice(0, 3);
        }
        
        // Закрываем скобки и добавляем первые 3 цифры номера
        if (digits.length > 3) {
            result += ') ';
            result += digits.slice(3, 6);
        }
        
        // Добавляем дефис и следующие 2 цифры
        if (digits.length > 6) {
            result += '-';
            result += digits.slice(6, 8);
        }
        
        // Добавляем дефис и последние 2 цифры
        if (digits.length > 8) {
            result += '-';
            result += digits.slice(8, 10);
        }

        return result;
    }

    function handlePhoneInput(event: Event) {
        const input = event.target as HTMLInputElement;
        let value = input.value;

        // Если первая цифра 8, убираем её
        if (value.startsWith('8')) {
            value = value.slice(1);
        }

        phone = formatPhoneNumber(value);
    }

    function handlePhonePaste(event: ClipboardEvent) {
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text') || '';
        phone = formatPhoneNumber(pastedText);
    }

    async function handleRegister() {
        // Проверяем формат телефона
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 11) {
            error = 'Введите полный номер телефона';
            return;
        }

        if (!password) {
            error = 'Введите пароль';
            return;
        }

        loading = true;
        error = '';
        
        try {
            const data = await register({
                phone,
                password,
                name,
                floor: parseInt(floor),
                apartment: parseInt(apartment)
            });

            // Registration successful
            auth.login(data.user, data.token);
            navigate('cabinet');
        } catch (err) {
            console.error('Registration error:', err);
            error = err instanceof Error ? err.message : 'Произошла ошибка при попытке регистрации';
        } finally {
            loading = false;
        }
    }

    async function loginButtonPress() {
        auth.login({id: 1, phone: '+7 777 777 77', name: "Guest"}, 1);
            navigate('cabinet');
    }
</script>

<div class="register-container">
    <div class="register-card">
        <h1>Регистрация</h1>
        
        <!-- <form on:submit|preventDefault={handleRegister}> -->
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    oninput={handlePhoneInput}
                    onpaste={handlePhonePaste}
                    placeholder="+7 (___) ___-__-__"
                    required
                />
                <span class="input-hint">Формат: +7 (XXX) XXX-XX-XX</span>
            </div>

            <div class="form-group">
                <label for="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    bind:value={password}
                    placeholder="Введите пароль"
                    required
                />
            </div>

            <div class="form-group">
                <label for="name">Имя</label>
                <input
                    type="text"
                    id="name"
                    bind:value={name}
                    placeholder="Введите ваше имя"
                    required
                />
            </div>

            <div class="form-group">
                <label for="floor">Этаж</label>
                <input
                    type="number"
                    id="floor"
                    bind:value={floor}
                    placeholder="Введите номер этажа"
                    min="1"
                    max="1000"
                    title="Номер этажа должен быть от 1 до 1000"
                    required
                />
            </div>

            <div class="form-group">
                <label for="apartment">Номер квартиры</label>
                <input
                    type="number"
                    id="apartment"
                    bind:value={apartment}
                    placeholder="Введите номер квартиры"
                    min="1"
                    required
                />
            </div>

            {#if error}
                <div class="error-message">
                    {error}
                </div>
            {/if}

            <!-- <button type="submit" disabled={loading}>
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
            </button> -->

            <button onclick={loginButtonPress} type="submit" disabled={loading}>
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>

            <div class="login-link">
                Уже есть аккаунт? 
                <a href="#" onclick={() => window.dispatchEvent(new CustomEvent('navigate', { 
                    detail: { component: 'auth' }
                }))}>
                    Войти
                </a>
            </div>
        <!-- </form> -->
    </div>
</div>

<style>
    .register-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        background-color: #f5f5f5;
    }

    .register-card {
        background: white;
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }

    h1 {
        margin: 0 0 24px 0;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #313E56;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        color: #313E56;
    }

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.2s;
    }

    input:focus {
        outline: none;
        border-color: #2B5BDA;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    button {
        width: 100%;
        padding: 12px;
        background-color: #2B5BDA;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #1e40af;
    }

    button:disabled {
        background-color: #93c5fd;
        cursor: not-allowed;
    }

    .error-message {
        color: #dc2626;
        font-size: 14px;
        margin-bottom: 16px;
        padding: 8px;
        background-color: #fee2e2;
        border-radius: 4px;
    }

    .login-link {
        margin-top: 16px;
        text-align: center;
        font-size: 14px;
        color: #313E56;
    }

    .login-link a {
        color: #2B5BDA;
        text-decoration: none;
        font-weight: 500;
    }

    .login-link a:hover {
        text-decoration: underline;
    }

    .input-hint {
        display: block;
        font-size: 12px;
        color: #6B7280;
        margin-top: 4px;
    }
</style> 