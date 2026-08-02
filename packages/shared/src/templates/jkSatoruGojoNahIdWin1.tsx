import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const jkSatoruGojoNahIdWin1: Template = {
    name: "jkSatoruGojoNahIdWin1",
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextRightWithBackground, Type.FaceImage],
    width: 700,
    height: 368,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Gojo's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkSatoruGojoNahIdWin1.png"
                width={350}
                height={368}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 95,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
