import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsAtLeastYouTried: Template = {
    name: "simpsonsAtLeastYouTried",
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.faceImage, Type.defaultText],
    width: 736,
    height: 730,
    texts: [],
    images: [{ id: 0, description: "Bart`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/simpsonsAtLeastYouTried.png"
                width={736}
                height={730}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: "-7%",
                    left: "-2%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
