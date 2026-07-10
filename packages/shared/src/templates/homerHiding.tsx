import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const homerHiding: Template = {
    name: "homerHiding",
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.textBottom, Type.faceImage, Type.fourOption],
    width: 600,
    height: 600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "the person hiding" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/homerhiding.jpg"
                width={600}
                height={600}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{ position: "absolute", top: 35, left: 110, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", top: 40, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", bottom: 110, left: 120, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{ position: "absolute", bottom: 110, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 35,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
