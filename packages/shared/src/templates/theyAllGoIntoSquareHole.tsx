import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";

export const theyAllGoIntoSquareHole: Template = {
    name: "theyAllGoIntoSquareHole",
    topics: [Topic.Misc],
    width: 854,
    height: 1042,
    texts: [],
    images: [{ id: 0, description: "People who were banned by the UK government" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/theyAllGoIntoSquareHole.png"
                width={854}
                height={1042}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 265,
                    left: 400,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 100,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    bottom: 85,
                    right: 100,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
        </div>
    ),
};
