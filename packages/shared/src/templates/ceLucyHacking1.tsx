import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const ceLucyHacking1: Template = {
    name: "ceLucyHacking1",
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.DefaultText, Type.AvatarImage],
    width: 640,
    height: 572,
    texts: [],
    images: [{ id: 0, description: "user avatar" }],
    element: ({ images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/ceLucyHacking.png"
                width={640}
                height={462}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 300,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                    filter: "sepia(1) hue-rotate(330deg) saturate(3)",
                    opacity: 0.6,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                    I am rapidly uncovering your location
                </div>
            </div>
        </div>
    ),
};
