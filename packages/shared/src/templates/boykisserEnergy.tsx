import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const boykisserEnergy: Template = {
    id: 70,
    name: "boykisserEnergy",
    width: 665,
    height: 662,
    texts: [],
    images: [{ id: 0, description: "femboy`s face" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/boykisserEnergy.jpg"
                width={665}
                height={662}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{ position: "absolute", top: 60, left: 250, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
