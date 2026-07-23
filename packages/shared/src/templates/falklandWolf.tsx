import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const falklandWolf: Template = {
    name: "falklandWolf",
    topics: [Topic.SocialPost],
    types: [Type.avatarImage, Type.defaultText, Type.objectImage, Type.textBottom],
    width: 814,
    height: 691,
    texts: [{ id: 0, description: "Phrase that wolf says", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Image of the wolf" },
        { id: 1, description: "Profile picture of the guy who tweets about it" },
    ],
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
                src={images[1]}
                width={85}
                height={75}
                style={{
                    position: "absolute",
                    top: 8,
                    left: 16,
                }}
            />
            <img
                src={images[0]}
                width={700}
                height={470}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 107,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/falklandWolf.png"
                width={814}
                height={691}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: "2.5%",
                    bottom: "5%",
                    width: "85%",
                    height: "20%",
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
                        WebkitLineClamp: 2,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 6,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
