import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const toradoraTaigaCatchesRyuujiAndAmi: Template = {
    name: "toradoraTaigaCatchesRyuujiAndAmi",
    displayName: "Toradora Taiga catches Ryuuji And Ami",
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.FaceImage],
    width: 870,
    height: 964,
    texts: [],
    images: [
        { id: 0, description: "Ryuuji`s face" },
        { id: 1, description: "Ami`s face" },
        { id: 2, description: "Taiga`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaCatchesRyuujiAndAmi.png"
                width={870}
                height={964}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 230,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[1]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 110,
                    right: 400,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[2]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: 200,
                    right: 330,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
