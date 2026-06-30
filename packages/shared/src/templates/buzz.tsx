import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const buzz: Template = {
    name: "buzz",
    width: 800,
    height: 544,
    texts: [{ id: 0, description: "the phrase Buzz says", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Buzz's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/buzz.png"
                width={800}
                height={544}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{ position: "absolute", top: 120, left: 300, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    maxHeight: "25%",
                    overflow: "hidden",
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
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 44,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 6,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
