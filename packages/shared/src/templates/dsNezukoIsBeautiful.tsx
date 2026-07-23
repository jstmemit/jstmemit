import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const dsNezukoIsBeautiful: Template = {
    name: "dsNezukoIsBeautiful",
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.faceImage, Type.textTopWithBackground],
    width: 1710,
    height: 1105,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 20 }],
    images: [
        { id: 0, description: "Tanjiro's face" },
        { id: 1, description: "Nezuko's face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/dsNezukoIsBeautiful.png"
                width={1710}
                height={855}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={600}
                height={600}
                style={{ position: "absolute", top: 400, left: 150, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={400}
                height={400}
                style={{ position: "absolute", top: 400, right: 150, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
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
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
