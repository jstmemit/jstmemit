import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const pfAllToghether: Template = {
    name: "pfAllToghether",
    topics: [Topic.PulpFiction, Topic.Movies],
    types: [Type.TextBottomWithBackground, Type.FaceImage],
    width: 950,
    height: 632,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Jules's face (left)" },
        { id: 1, description: "Vincent's face (center left)" },
        { id: 2, description: "The Wolf's face (center right)" },
        { id: 3, description: "Jimmie's face (right)" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/pfAllToghether.jpg"
                width={950}
                height={632}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "38%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: "16%",
                    right: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[3]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: "12%",
                    right: "15%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
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
