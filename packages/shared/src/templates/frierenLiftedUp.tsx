import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const frierenLiftedUp: Template = {
    name: "frierenLiftedUp",
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.textTop, Type.faceImage],
    width: 335,
    height: 597,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Frierens's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/frierenLiftedUp.png"
                width={335}
                height={597}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: 230,
                    left: 120,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "30%",
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
                        WebkitLineClamp: 3,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
