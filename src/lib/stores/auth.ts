import { writable } from 'svelte/store';

interface User {
    id: number;
    phone: string;
    name: string;
    floor: number;
    apartment: number;
}

interface AuthStore {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

function createAuthStore() {
    const { subscribe, set, update } = writable<AuthStore>({
        user: null,
        token: localStorage.getItem('token'),
        isAuthenticated: false
    });

    return {
        subscribe,
        login: (user: User, token: string) => {
            localStorage.setItem('token', token);
            set({
                user,
                token,
                isAuthenticated: true
            });
        },
        logout: () => {
            localStorage.removeItem('token');
            set({
                user: null,
                token: null,
                isAuthenticated: false
            });
        },
        initialize: () => {
            const token = localStorage.getItem('token');
            if (!token) {
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false
                });
                return;
            }
            // Если есть токен в localStorage, устанавливаем состояние авторизации
            set({
                user: null, // Пользователь будет установлен при первом запросе к API
                token,
                isAuthenticated: true
            });
        }
    };
}

export const auth = createAuthStore(); 