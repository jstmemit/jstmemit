import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const kaguyasamaKaguyaDroppingPhone: Template = {
    name: "kaguyasamaKaguyaDroppingPhone",
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.DefaultText, Type.FaceImage],
    width: 640,
    height: 831,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaKaguyaDroppingPhone.png"
                width={640}
                height={831}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: -10,
                    right: 145,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    bottom: 140,
                    left: 130,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
