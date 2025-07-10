import { useQuery } from '@tanstack/react-query';

const BASE = import.meta.env.BASE_URL || '/';

export function useTestData() {
    const questionsQuery = useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const res = await fetch(`${BASE}data/questions.json`);
            if (!res.ok) throw new Error('Ошибка загрузки вопросов');
            return res.json();
        },
        enabled: false
    });

    const resultsQuery = useQuery({
        queryKey: ['results'],
        queryFn: async () => {
            const res = await fetch(`${BASE}data/results.json`);
            if (!res.ok) throw new Error('Ошибка загрузки результатов');
            return res.json();
        },
        enabled: false
    });

    return {
        questions: questionsQuery.data,
        isFetching: questionsQuery.isFetching || resultsQuery.isFetching,
        refetchQuestions: questionsQuery.refetch,
        refetchResults: resultsQuery.refetch
    };
}
