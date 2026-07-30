import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const blendsHideriFingerTapping: Template = {
    name: "blendsHideriFingerTapping",
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.ObjectImage, Type.FaceImage],
    width: 801,
    height: 765,
    texts: [],
    images: [
        { id: 0, description: "What Hideri holding in hands" },
        { id: 1, description: "Hideri`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriFingerTapping.png"
                width={801}
                height={765}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{
                    position: "absolute",
                    bottom: 130,
                    left: 300,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-25deg)",
                }}
            />
            <img
                src={images[1]}
                width={280}
                height={280}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 255,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-25deg)",
                }}
            />
        </div>
    ),
};
