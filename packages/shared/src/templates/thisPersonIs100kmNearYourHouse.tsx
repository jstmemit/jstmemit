import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const thisPersonIs100kmNearYourHouse: Template = {
    name: "thisPersonIs100kmNearYourHouse",
    topics: [Topic.Misc],
    types: [Type.FaceImage, Type.DefaultText],
    width: 498,
    height: 464,
    texts: [],
    images: [{ id: 0, description: "Person face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/thisPersonIs100kmNearYourHouse.png"
                width={498}
                height={464}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
