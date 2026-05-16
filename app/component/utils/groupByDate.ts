import { DateGroup,Form } from "@/type/table";

export const groupByDate = (
    items:Form[]
):DateGroup[] => {
    const grouped: Record<string, Form[]> = {};

    items.forEach((item) => {
        const date = item.day;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(item);
    });
    return Object.entries(grouped)
    .map(([date, items]) => ({
            date,
            items,
        }))
        .sort((a, b) =>
            b.date.localeCompare(a.date)
    );
}; 