import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsScaryNews: Template = {
    name: "simpsonsScaryNews",
    displayName: "Simpsons Scary news",
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.News, Topic.Reaction],
    types: [Type.ObjectImage, Type.TextCenterWithBackground, Type.TwoOption],
    width: 1280,
    height: 1920,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "scary news" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsScaryNews.jpg"
                width={1280}
                height={1920}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={440}
                height={380}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 180,
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "50%",
                    width: "100%",
                    height: "200px",
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
                        fontSize: 80,
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
