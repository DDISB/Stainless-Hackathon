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
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        token: localStorage.getItem('token'),
        isAuthenticated: !!localStorage.getItem('token')
    });

    return {
        subscribe,
        login: (user: User, token: string) => {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            set({
                user,
                token,
                isAuthenticated: true
            });
        },
        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            set({
                user: null,
                token: null,
                isAuthenticated: false
            });
        },
        initialize: () => {
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            
            set({
                user,
                token,
                isAuthenticated: !!token
            });
        }
    };
}

export const auth = createAuthStore(); 