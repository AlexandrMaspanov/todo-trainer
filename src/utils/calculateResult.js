export async function calculateResult(answers, questions) {
    const counts = {};

    // Подсчёт: сколько раз встречается каждый тип
    questions.forEach(q => {
        const selectedLabel = answers[q.id];
        const selected = q.options.find(opt => opt.label === selectedLabel);
        if (selected) {
            counts[selected.type] = (counts[selected.type] || 0) + 1;
        }
    });

    // Выбор типа с максимальным количеством
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const dominantType = sorted[0]?.[0];

    if (!dominantType) return null;

    // Загрузка results.json
    const base = import.meta.env.BASE_URL || '/';
    const res = await fetch(`${base}data/results.json`);
    if (!res.ok) throw new Error('Ошибка загрузки результатов');
    const results = await res.json();

    return {
        type: dominantType,
        counts,
        result: results[dominantType] || null
    };
}
