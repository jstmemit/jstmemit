import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const ditfZeroTwoWhatever1: Template = {
    name: "ditfZeroTwoWhatever1",
    topics: [Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.objectImage, Type.textBottomWithBackground, Type.twoOption],
    width: 736,
    height: 524,
    texts: [{ id: 0, description: "the phrase Zero Two says", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "object in left hand" },
        { id: 1, description: "object in right hand" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoWhatever.png"
                width={736}
                height={414}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{ position: "absolute", top: 150, left: 60, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={150}
                height={150}
                style={{ position: "absolute", top: 150, right: 50, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "110px",
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
