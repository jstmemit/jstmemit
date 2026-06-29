import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const simpsonsLIsaShowPresentation: Template = {
    name: "simpsonsLIsaShowPresentation",
    width: 736,
    height: 551,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Lisa`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/simpsonsLIsaShowPresentation.jpg"
                width={736}
                height={551}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "27%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "10%",
                    padding: "15px",
                    width: "65%",
                    height: "100%",
                    maxHeight: "45%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontWeight: "bold",
                    fontSize: 30,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
