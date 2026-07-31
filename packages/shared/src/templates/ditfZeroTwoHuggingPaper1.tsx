import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const ditfZeroTwoHuggingPaper1: Template = {
    name: "ditfZeroTwoHuggingPaper1",
    topics: [Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.FaceImage, Type.TextTopWithBackground],
    width: 732,
    height: 827,
    texts: [],
    images: [
        { id: 0, description: "Zero Two's face" },
        { id: 1, description: "image on the paper" },
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
                src={images[1]}
                width={635}
                height={400}
                style={{
                    position: "absolute",
                    left: "6%",
                    top: 0,
                    objectFit: "cover",
                    transform: "rotate(-3deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoHuggingPaper1.png"
                width={732}
                height={827}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={170}
                height={170}
                style={{ position: "absolute", bottom: 160, left: 240, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
