import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const toradoraTaigaHoldingLeek: Template = {
    name: "toradoraTaigaHoldingLeek",
    displayName: "Toradora Taiga holding leek",
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.DefaultText, Type.FaceImage],
    width: 519,
    height: 385,
    texts: [],
    images: [{ id: 0, description: "Taiga`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaHoldingLeek.png"
                width={519}
                height={385}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
        </div>
    ),
};
