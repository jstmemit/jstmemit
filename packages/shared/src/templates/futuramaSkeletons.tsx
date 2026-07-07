import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const futuramaSkeletons: Template = {
    name: "futuramaSkeletons",
    width: 480,
    height: 385,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "face in the left" },
        { id: 1, description: "face in the center" },
        { id: 2, description: "face in the right" },
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
                src="https://files.wideunits.nl/jstmemit/images/templates/futuramaSkeletons.jpg"
                width={480}
                height={385}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={95}
                height={95}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "13%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: "26%",
                    left: "38%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: "17%",
                    right: "16%",
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
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))",
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
                        fontSize: 30,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
