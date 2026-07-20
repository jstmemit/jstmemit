import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const blendsHideriFingerTapping: Template = {
    name: "blendsHideriFingerTapping",
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.objectImage],
    width: 801,
    height: 765,
    texts: [],
    images: [{ id: 0, description: "Hideri`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/blendsHideriFingerTapping.png"
                width={801}
                height={765}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    bottom: 140,
                    left: 240,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
