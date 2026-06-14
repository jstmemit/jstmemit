import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const spongebob: Template = {
    id: 4,
    name: "spongebob",
    width: 622,
    height: 727,
    texts: [{ id: 0, description: "bottom text", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "image that gets burned down" }],
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
                src={images[0]}
                width={195}
                height={275}
                style={{ position: "absolute", top: 50, left: 45 }}
            />
            <img
                src={
                    "https://files.wideunits.nl/jstmemit/images/templates/spongebob.png"
                }
                width={622}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 70,
                    color: "white",
                    WebkitTextStrokeWidth: 5,
                    WebkitTextStrokeColor: "black",
                    textAlign: "center",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
