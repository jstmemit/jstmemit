import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const toradoraTaigaMorningMisanthropeDemotivator: Template = {
    name: "toradoraTaigaMorningMisanthropeDemotivator",
    displayName: "Toradora Taiga morning misanthrope demotivator",
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.FaceImage, Type.DefaultText],
    width: 500,
    height: 418,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaMorningMisanthropeDemotivator.png"
                width={500}
                height={418}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={140}
                height={140}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 160,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
