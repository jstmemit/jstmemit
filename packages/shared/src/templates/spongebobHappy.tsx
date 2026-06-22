import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const spongebobHappy: Template = {
    id: 25,
    name: "spongebobHappy",
    width: 1199,
    height: 918,
    texts: [],
    images: [{ id: 0, description: "Squidward's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/spongebobhappy.png"
                width={1199}
                height={918}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={260}
                height={260}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
