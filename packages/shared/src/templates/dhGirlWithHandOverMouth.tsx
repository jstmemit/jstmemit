import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const dhGirlWithHandOverMouth: Template = {
    name: "dhGirlWithHandOverMouth",
    width: 718,
    height: 1131,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "doctor House`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/dhGirlWithHandOverMouth.jpg"
                width={718}
                height={1131}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={450}
                height={450}
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "-15%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    padding: "15px",
                    width: "100%",
                    height: "100%",
                    maxHeight: "13%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontWeight: "bold",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
