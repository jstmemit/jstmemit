import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const bearArrest: Template = {
    name: "bearArrest",
    displayName: "Bear arrest",
    topics: [Topic.News, Topic.Animals],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 640,
    height: 434,
    texts: [{ id: 0, description: "breaking news", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "arrested bear" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bearArrest.jpg"
                width={640}
                height={434}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 35,
                    left: 315,
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: "15px",
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "flex-start",
                    textAlign: "start",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#000000",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
