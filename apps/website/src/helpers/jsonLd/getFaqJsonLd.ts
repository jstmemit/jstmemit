import type { FaqQuestion } from "#/models/FaqQuestion.ts";

export const getFaqJsonLd = (entries: FaqQuestion[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: `${entry.highlight} ${entry.answer}`,
        },
    })),
});
