import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const konAzusaNoThanks: Template = {
    name: "konAzusaNoThanks",
    displayName: "K-On Azusa no thanks",
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.DefaultText, Type.FaceImage],
    width: 860,
    height: 550,
    texts: [],
    images: [{ id: 0, description: "Kaguya's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konAzusaNoThanks.png"
                width={860}
                height={550}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 90,
                    right: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
