import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const iSteppedInShit: Template = {
    name: "iSteppedInShit",
    width: 636,
    height: 900,
    texts: [],
    images: [
        { id: 0, description: "person`s face" },
        { id: 1, description: "person`s face on foot" },
    ],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/iSteppedInShit.jpg"
                width={636}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 310,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 100,
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
