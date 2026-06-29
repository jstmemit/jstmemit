import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const sdFredUnmaskingGhost: Template = {
    name: "sdFredUnmaskingGhost",
    width: 474,
    height: 632,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Fred`s face" },
        { id: 1, description: "Villain`s face" },
    ],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Impact",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/sdFredUnmaskingGhost.jpg"
                width={474}
                height={632}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "8%",
                    right: "10%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "30%",
                    right: "10%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "15%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: "15px",
                    width: "100%",
                    height: "100%",
                    maxHeight: "20%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontWeight: "bold",
                    fontSize: 30,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
