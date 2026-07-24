import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const fuckMyChudLife: Template = {
    name: "fuckMyChudLife",
    topics: [Topic.SocialPost],
    types: [Type.defaultText, Type.objectImage, Type.textBottom],
    width: 776,
    height: 999,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "meal image that would be posted on r/kitchencels" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/fuckMyChudLife.png"
                width={776}
                height={999}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img src={images[0]} width={776} height={480} style={{ position: "absolute", top: 520, left: 0 }} />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 55,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
