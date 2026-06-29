import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const spidermanPeterDance: Template = {
    name: "spidermanPeterDance",
    width: 735,
    height: 479,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "Spiderman`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/spidermanPeterDance.jpg"
                width={735}
                height={479}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "37%",
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
                    maxHeight: "30%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontWeight: "bold",
                    fontSize: 40,
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
