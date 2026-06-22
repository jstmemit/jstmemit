import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const yesChad: Template = {
    id: 13,
    name: "yesChad",
    width: 1400,
    height: 733,
    texts: [{ id: 0, description: "what chad approves of", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "the chad's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/yeschad.png"
                width={1400}
                height={733}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={460}
                height={460}
                style={{ position: "absolute", top: 70, left: 135, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 150,
                    top: 550,
                    width: 420,
                    height: 183,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Impact",
                    fontSize: 70,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
