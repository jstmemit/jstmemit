import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const iInterviewedAnimals: Template = {
    name: "iInterviewedAnimals",
    width: 621,
    height: 426,
    texts: [{ id: 0, description: "what the animal says", minLength: 1, maxLength: 2 }],
    images: [{ id: 0, description: "the thumbnail subject" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={621}
                height={340}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/iInterviewedAnimals.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 50,
                    bottom: 150,
                    width: "25%",
                    height: "33%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#fff",
                    wordBreak: "break-word",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "black",
                }}
            >
                "{texts[0]}"
            </div>
        </div>
    ),
};
