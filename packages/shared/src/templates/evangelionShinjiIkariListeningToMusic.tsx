import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const evangelionShinjiIkariListeningToMusic: Template = {
    name: "evangelionShinjiIkariListeningToMusic",
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.textBottom, Type.faceImage],
    width: 640,
    height: 480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Shinji's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiIkariListeningToMusic.png"
                width={640}
                height={480}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={155}
                height={155}
                style={{
                    position: "absolute",
                    top: 105,
                    left: 185,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-45deg)",
                    filter: "sepia(1) hue-rotate(200deg) saturate(2)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    overflow: "hidden",
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
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
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
