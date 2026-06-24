import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const quote: Template = {
    id: 14,
    name: "quote",
    width: 800,
    height: 800,
    texts: [{ id: 0, description: "the quote", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "background image" }],
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
                src={images[0]}
                width={800}
                height={800}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 80,
                    top: 300,
                    width: 640,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 44,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                "{texts[0]}"
            </div>
        </div>
    ),
};
