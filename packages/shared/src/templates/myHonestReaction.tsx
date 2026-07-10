import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const myHonestReaction: Template = {
    name: "myHonestReaction",
    topics: [Topic.Reaction],
    types: [Type.defaultText, Type.faceImage],
    width: 736,
    height: 677,
    texts: [],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/myHonestReaction.jpg"
                width={736}
                height={677}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={"100%"}
                height={"92%"}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
