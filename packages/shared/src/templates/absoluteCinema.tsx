import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";

export const absoluteCinema: Template = {
    id: 19,
    name: "absoluteCinema",
    width: 1230,
    height: 1422,
    texts: [],
    images: [{ id: 0, description: "background" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Impact",
            }}
        >
            <img
                src={images[0]}
                width={1230}
                height={1422}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/absolutecinema.png"
                width={1230}
                height={1422}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
