import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsWhatIsInHomersHead: Template = {
    name: "simpsonsWhatIsInHomersHead",
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.textBottom, Type.objectImage],
    width: 525,
    height: 682,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [
        { id: 0, description: "first idea in Homer`s head" },
        { id: 1, description: "second idea in Homer`s head" },
        { id: 2, description: "third idea in Homer`s head" },
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
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 70,
                    right: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 140,
                    right: 240,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 100,
                    right: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/simpsonsWhatIsInHomersHead.png"
                width={525}
                height={682}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
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
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
