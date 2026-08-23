export const getBreadcrumbListJsonLd = (url: string, title: string) => {
    const segments: string[] = new URL(url).pathname.split("/").filter(Boolean);

    return {
        "@type": "BreadcrumbList",
        "@id": url + "#breadcrumb",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://jstmemit.com" },
            ...segments.map((segment: string, index: number) => ({
                "@type": "ListItem",
                position: index + 2,
                name: title?.split("//").pop()?.trim(),
                ...(index < segments.length - 1
                    ? { item: "https://jstmemit.com/" + segments.slice(0, index + 1).join("/") }
                    : {}),
            })),
        ],
    };
};
