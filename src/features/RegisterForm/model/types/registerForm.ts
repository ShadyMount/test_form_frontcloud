export interface RegisterFormSchema {
    formData:RegisterFormData,

    isLoading: boolean;
    error?: string;
    response?: string
}

export enum Sex {
    MAN = 'man',
    WOMAN = 'woman',
}

export interface checkboxType {
    label: number;
    checked: boolean
}

export interface RegisterFormData {
    nickname:string;
    name:string;
    sername:string;
    phone:string;
    email:string;
    sex: Sex | undefined;
    advantages: Record<string, string>;
    radio: number;
    checkbox: checkboxType[];

    about: string;
}
