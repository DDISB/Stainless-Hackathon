interface RegisterData {
    phone: string;
    password: string;
    name: string;
    floor: number;
    apartment: number;
}

interface LoginData {
    phone: string;
    password: string;
}

interface AuthResponse {
    token: string;
    user: {
        id: number;
        phone: string;
        name: string;
        floor: number;
        apartment: number;
    };
}

const API_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export async function login(data: LoginData): Promise<AuthResponse> {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            ...API_CONFIG,
            body: JSON.stringify({
                phone: data.phone,
                password: data.password
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Ошибка при входе в систему');
        }

        return responseData;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export async function register(data: RegisterData): Promise<AuthResponse> {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            ...API_CONFIG,
            body: JSON.stringify({
                phone: data.phone,
                password: data.password,
                name: data.name,
                floor: data.floor,
                number: data.apartment
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Ошибка при регистрации');
        }

        return responseData;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

export async function validateToken(token: string) {
    try {
        const response = await fetch('/api/auth/validate', {
            method: 'GET',
            ...API_CONFIG,
            headers: {
                ...API_CONFIG.headers,
                'Authorization': `Bearer ${token}`
            }
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Ошибка валидации токена');
        }

        return responseData;
    } catch (error) {
        console.error('Token validation error:', error);
        throw error;
    }
}
