import { useQuery } from '@tanstack/react-query';

export function useQuestions() {
    return useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const base = import.meta.env.BASE_URL || '/';
            const res = await fetch(`${base}data/questions.json`);
            if (!res.ok) throw new Error('Ошибка загрузки вопросов');
            return res.json();
        },
        enabled: false // загружается только по кнопке
    });
}
