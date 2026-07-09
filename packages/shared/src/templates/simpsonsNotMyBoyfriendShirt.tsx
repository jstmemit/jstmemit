import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";

export const simpsonsNotMyBoyfriendShirt: Template = {
    name: "simpsonsNotMyBoyfriendShirt",
    topics: [Topic.Simpsons, Topic.Cartoons],
    width: 493,
    height: 750,
    texts: [],
    images: [
        { id: 0, description: "woman`s face" },
        { id: 1, description: "man`s face" },
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
                src="https://files.wideunits.nl/jstmemit/images/templates/simpsonsNotMyBoyfriendShirt.png"
                width={493}
                height={750}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "40%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
