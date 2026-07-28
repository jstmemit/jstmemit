import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const crowdFromAngryToHappy: Template = {
    name: "crowdFromAngryToHappy",
    topics: [Topic.Reaction, Topic.Cartoons],
    types: [Type.TwoOption, Type.TextLeft, Type.FaceImage],
    width: 716,
    height: 700,
    texts: [
        { id: 0, description: "first speach", minLength: 1, maxLength: 2 },
        { id: 1, description: "second speach", minLength: 1, maxLength: 2 },
    ],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/crowdFromAngryToHappy.jpg"
                width={716}
                height={700}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 110,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    bottom: 190,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "15%",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        wordBreak: "break-word",
                        whiteSpace: "nowrap",

                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[0]}
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    width: "50%",
                    height: "15%",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        wordBreak: "break-word",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[1]}
                </span>
            </div>
        </div>
    ),
};
