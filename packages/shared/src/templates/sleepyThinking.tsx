import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const sleepyThinking: Template = {
    name: "sleepyThinking",
    topics: [Topic.Misc],
    types: [Type.textBottom, Type.objectImage],
    width: 885,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "dream thumbnail" }],
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
                width={590}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 320,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/sleepythinking.png"
                width={885}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
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
                        WebkitLineClamp: 3,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
