import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const quote: Template = {
    name: "quote",
    topics: [Topic.Misc],
    types: [Type.BackgroundImage, Type.TextCenterWithBackground],
    width: 800,
    height: 800,
    texts: [{ id: 0, description: "quote", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "background image" }],
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
                src={images[0]}
                width={800}
                height={800}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "30px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                        fontFamily: "Comic Sans MS",
                        fontSize: 44,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                        color: "#ffffff",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
