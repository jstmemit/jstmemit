import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const liveReaction: Template = {
    name: "liveReaction",
    width: 800,
    height: 800,
    texts: [],
    images: [
        { id: 0, description: "content to react to" },
        { id: 1, description: "person who reacts" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img src={images[0]} width={768} height={615} style={{ position: "absolute", top: 185, left: 17 }} />
            <img
                src={"https://files.wideunits.nl/jstmemit/images/templates/livereaction.png"}
                width={800}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[1]}
                width={110}
                height={110}
                style={{
                    position: "absolute",
                    top: 35,
                    left: 212,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
