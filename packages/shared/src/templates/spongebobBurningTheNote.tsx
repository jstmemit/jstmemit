import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const spongebobBurningTheNote: Template = {
    name: "spongebobBurningTheNote",
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextCenterWithBackground, Type.ObjectImage, Type.FourOption],
    width: 622,
    height: 727,
    texts: [{ id: 0, description: "bottom text", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "image that gets burned down" }],
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
            <img src={images[0]} width={195} height={275} style={{ position: "absolute", top: 50, left: 45 }} />
            <img
                src={
                    "https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebob.png"
                }
                width={622}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "340px",
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    background: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
