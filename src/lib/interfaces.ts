export interface TaskData {
    title: string;
    points: number;
    description: string;
    isNew: boolean;
    image: string;
    timeLeft: string;
    progress: number;
    company: string;
    companyDescription: string;
}

export interface Bonus {
    level: number;
    points: number;
    description: string;
}

export interface Prize {
    level: number;
    name: string;
    description: string;
    image?: string;
}

export interface LevelInfo {
    level: number;
    isCompleted: boolean;
    bonus?: Bonus;
    prize?: Prize;
} 