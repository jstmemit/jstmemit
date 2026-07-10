import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const bernieSandersLive: Template = {
    name: "bernieSandersLive",
    topics: [Topic.YouTube],
    types: [Type.faceImage, Type.textCenter],
    width: 981,
    height: 1038,
    texts: [
        { id: 0, description: "person's speech", minLength: 1, maxLength: 3 },
        { id: 1, description: "Bernie Sanders reaction", minLength: 1, maxLength: 3 },
    ],
    images: [{ id: 0, description: "Person who is debating with Bernie Sanders on his live stream" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={460}
                height={250}
                style={{
                    position: "absolute",
                    top: 290,
                    left: 40,
                    borderColor: "#176c3f",
                    borderWidth: 3,
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/bernieSandersLive.png"
                width={981}
                height={1038}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "5%",
                    bottom: 500,
                    width: "45%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        color: "#fff",
                        wordBreak: "break-word",
                        WebkitTextStrokeWidth: 6,
                        WebkitTextStrokeColor: "#000000",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[0]}!
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 500,
                    width: "46%",
                    maxWidth: "46%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        wordBreak: "break-word",
                        WebkitTextStrokeWidth: 6,
                        WebkitTextStrokeColor: "#000000",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    *{texts[1]}*
                </span>
            </div>
        </div>
    ),
};
