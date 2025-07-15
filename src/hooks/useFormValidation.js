import { useEffect, useState } from 'react';

const validateFieldByKey = (key, value) => {
    switch (key) {
        case 'name':
            if (!value || value.trim().length < 2) return 'Имя должно быть не короче 2 символов';
            if (!/^[а-яА-ЯёЁa-zA-Z -]+$/.test(value)) return 'Имя может содержать только буквы, пробел и дефис';
            break;
        case 'surname':
            if (value && value.trim().length < 2) return 'Фамилия слишком короткая';
            if (value && !/^[а-яА-ЯёЁa-zA-Z -]+$/.test(value)) return 'Фамилия может содержать только буквы, пробел и дефис';
            break;
        case 'patronymic':
            if (value && value.trim().length < 2) return 'Отчество слишком короткое';
            if (value && !/^[а-яА-ЯёЁa-zA-Z -]+$/.test(value)) return 'Отчество может содержать только буквы, пробел и дефис';
            break;
        case 'email':
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Некорректный email';
            break;
        case 'birthdate':
            if (value) {
                const date = new Date(value);
                const now = new Date();
                if (date >= now || date.getFullYear() < 1920) return 'Введите корректную дату рождения';
            }
            break;
        default:
            return null;
    }
};

export function useFormValidation(data) {
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const newErrors = {};
        for (const key in data) {
            const error = validateFieldByKey(key, data[key]);
            if (error) newErrors[key] = error;
        }
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    }, [data]);

    const validateField = (key, value) => {
        const error = validateFieldByKey(key, value);
        setErrors(prev => ({ ...prev, [key]: error || undefined }));
    };

    return { errors, isValid, validateField };
}
