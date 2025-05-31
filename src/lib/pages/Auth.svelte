<script lang="ts">
    import { auth } from '../stores/auth';
    import { login } from '../utils/api';
    import { navigate } from '../utils/navigation';
    
    let phone = '';
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

    async function handleLogin() {
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
            const response = await login({ phone, password });
            auth.login(response.user, response.token);
            navigate('cabinet');
        } catch (err) {
            console.error('Login error:', err);
            error = err instanceof Error ? err.message : 'Произошла ошибка при попытке входа';
        } finally {
            loading = false;
        }
    }
</script>

<div class="auth-container">
    <div class="auth-card">
        <h1>Вход</h1>
        
        <form on:submit|preventDefault={handleLogin}>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    on:input={handlePhoneInput}
                    on:paste={handlePhonePaste}
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

            {#if error}
                <div class="error-message">
                    {error}
                </div>
            {/if}

            <button type="submit" disabled={loading}>
                {loading ? 'Вход...' : 'Войти'}
            </button>

            <div class="register-link">
                Нет аккаунта? 
                <a href="#" on:click|preventDefault={() => navigate('register')}>
                    Зарегистрироваться
                </a>
            </div>
        </form>
    </div>
</div>

<style>
    .auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        background-color: #f5f5f5;
    }

    .auth-card {
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

    .register-link {
        margin-top: 16px;
        text-align: center;
        font-size: 14px;
        color: #313E56;
    }

    .register-link a {
        color: #2B5BDA;
        text-decoration: none;
        font-weight: 500;
    }

    .register-link a:hover {
        text-decoration: underline;
    }

    .input-hint {
        display: block;
        font-size: 12px;
        color: #6B7280;
        margin-top: 4px;
    }
</style> 