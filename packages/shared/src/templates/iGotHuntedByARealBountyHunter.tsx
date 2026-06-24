import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";

export const iGotHuntedByARealBountyHunter: Template = {
    id: 32,
    name: "iGotHuntedByARealBountyHunter",
    width: 621,
    height: 426,
    texts: [],
    images: [{ id: 0, description: "the thumbnail subject" }],
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
                width={621}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/ytthumbnail4.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
