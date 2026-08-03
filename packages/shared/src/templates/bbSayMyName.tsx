import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const bbSayMyName: Template = {
    name: "bbSayMyName",
    displayName: "BB Say my name",
    topics: [Topic.BreakingBad, Topic.Movies],
    types: [Type.FaceImage, Type.DefaultText],
    width: 1280,
    height: 720,
    texts: [],
    images: [{ id: 0, description: "Walter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bbSayMyName.jpg"
                width={1280}
                height={720}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={650}
                height={650}
                style={{
                    position: "absolute",
                    top: -70,
                    right: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
