import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const stonks: Template = {
    name: "stonks",
    topics: [Topic.Reaction],
    types: [Type.backgroundImage, Type.textRight],
    width: 512,
    height: 386,
    texts: [{ id: 0, description: "the phrase", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "what the stonks guy is happy about" }],
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
                width={512}
                height={386}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/stonks.png"
                width={512}
                height={386}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "45%",
                    height: "100%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 10,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 4,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
