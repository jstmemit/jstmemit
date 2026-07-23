import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const ditfZeroTwoHuggingPaper: Template = {
    name: "ditfZeroTwoHuggingPaper",
    topics: [Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.faceImage, Type.textTopWithBackground],
    width: 732,
    height: 827,
    texts: [{ id: 0, description: "the phrase on a sheet of paper", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "Zero Two's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoHuggingPaper.png"
                width={732}
                height={827}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={170}
                height={170}
                style={{ position: "absolute", bottom: 160, left: 240, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "14%",
                    top: "1%",
                    width: "69%",
                    height: "40%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(-3deg)",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 7,
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
