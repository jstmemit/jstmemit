import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const spongebobShowsSign: Template = {
    name: "spongebobShowsSign",
    topics: [Topic.SpongeBob, Topic.Cartoons],
    types: [Type.ObjectImage, Type.TextLeft],
    width: 657,
    height: 493,
    texts: [
        { id: 0, description: "what spongebobBurningTheNote says while holding the sign", minLength: 1, maxLength: 8 },
    ],
    images: [{ id: 0, description: "image on the sign" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/spongebobShowsSign.png"
                width={657}
                height={493}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={340}
                style={{ position: "absolute", top: 10, right: 35, borderColor: "black", borderWidth: 3 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "45%",
                    height: "55%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        fontWeight: 700,
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
