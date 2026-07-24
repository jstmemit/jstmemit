import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const blendsMaidCast: Template = {
    name: "blendsMaidCast",
    topics: [Topic.Anime, Topic.BlendS],
    types: [Type.faceImage, Type.textTopWithBackground],
    width: 849,
    height: 760,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Hideri`s face" },
        { id: 1, description: "Kaho`s face" },
        { id: 2, description: "Maika`s face" },
        { id: 3, description: "Mafuyu`s face" },
        { id: 4, description: "Miu`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/blendsMaidCast.png"
                width={849}
                height={630}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 220,
                    left: 90,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 220,
                    left: 240,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 220,
                    left: 385,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[3]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 250,
                    right: 235,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[4]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 220,
                    right: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
