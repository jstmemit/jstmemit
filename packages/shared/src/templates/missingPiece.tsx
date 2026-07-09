import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";

export const missingPiece: Template = {
    name: "missingPiece",
    topics: [Topic.Misc],
    width: 783,
    height: 581,
    texts: [{ id: 0, description: "text on the puzzle", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "person who is missing puzzle" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/missingpiece.png"
                width={783}
                height={581}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 115,
                    left: 135,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: "40%",
                    width: "40%",
                    maxHeight: "60%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 8,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        color: "#000000",
                        WebkitTextStrokeWidth: 4,
                        WebkitTextStrokeColor: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
