import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const spongebobProud: Template = {
    name: "spongebobProud",
    displayName: "Spongebob proud",
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottom],
    width: 554,
    height: 419,
    texts: [{ id: 0, description: "bottom text", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "SpongeBob's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobProud.jpg"
                width={554}
                height={419}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 110,
                    left: "50%",
                    transform: "translateX(-50%)",
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 35,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
