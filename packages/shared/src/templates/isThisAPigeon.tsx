import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const isThisAPigeon: Template = {
    name: "isThisAPigeon",
    topics: [Topic.Cartoons],
    types: [Type.objectImage, Type.textBottom],
    width: 1587,
    height: 1425,
    texts: [{ id: 0, description: "question", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "the thing in place of the butterfly" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/isthisapigeon.png"
                width={1587}
                height={1425}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={600}
                height={600}
                style={{ position: "absolute", top: 120, right: 15, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
