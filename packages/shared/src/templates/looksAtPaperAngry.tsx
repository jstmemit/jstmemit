import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const looksAtPaperAngry: Template = {
    name: "looksAtPaperAngry",
    topics: [Topic.Reaction],
    types: [Type.textBottomWithBackground, Type.faceImage],
    width: 768,
    height: 727,
    texts: [{ id: 0, description: "what's written on the paper", minLength: 1, maxLength: 3 }],
    images: [
        { id: 0, description: "person passing the note" },
        { id: 1, description: "person reading it angrily" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/looksatpaperangry.png"
                width={768}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <img
                src={images[0]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 36,
                    left: 106,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 11,
                    left: 466,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 340,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "48%",
                    bottom: "18%",
                    width: "25%",
                    height: "20%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(27deg)",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
