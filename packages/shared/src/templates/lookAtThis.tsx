import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const lookAtThis: Template = {
    name: "lookAtThis",
    width: 480,
    height: 380,
    texts: [{ id: 0, description: "text1", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "object of interest" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/lookAtThis.jpg"
                width={480}
                height={380}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "52%",
                    bottom: 0,
                    transform: "translateX(-50%)",
                    width: "45%",
                    height: "auto",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[0]}
            </div>
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
