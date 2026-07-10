import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const bumperSticker: Template = {
    name: "bumperSticker",
    topics: [Topic.SocialPost],
    types: [Type.avatarImage, Type.objectImage],
    width: 814,
    height: 691,
    texts: [],
    images: [
        { id: 0, description: "Bumper sticker" },
        { id: 1, description: "Profile picture of the guy who wants the bumper sticker" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 15,
                    left: 10,
                    borderRadius: 24,
                }}
            />
            <img
                src={images[0]}
                width={480}
                height={250}
                style={{
                    position: "absolute",
                    top: 400,
                    left: 190,
                    transform: "rotate(3deg)",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/bumperSticker.png"
                width={814}
                height={691}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
