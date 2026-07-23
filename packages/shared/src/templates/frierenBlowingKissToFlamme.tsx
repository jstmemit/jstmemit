import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const frierenBlowingKissToFlamme: Template = {
    name: "frierenBlowingKissToFlamme",
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.faceImage],
    width: 1200,
    height: 1700,
    texts: [],
    images: [
        { id: 0, description: "Frieren's face" },
        { id: 1, description: "Flamme's face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/frierenBlowingKissToFlamme.png"
                width={1200}
                height={1700}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 470,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 600,
                    right: 340,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
