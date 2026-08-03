import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const jkSatoruGojoNahIdWin: Template = {
    name: "jkSatoruGojoNahIdWin",
    displayName: "JK Satoru Gojo nah I'd win",
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.DefaultText, Type.FaceImage],
    width: 700,
    height: 368,
    texts: [],
    images: [{ id: 0, description: "Gojo's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkSatoruGojoNahIdWin.png"
                width={700}
                height={368}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 95,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
