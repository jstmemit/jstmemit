import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const falklandWolf: Template = {
    name: "falklandWolf",
    width: 814,
    height: 691,
    texts: [{ id: 0, description: "Phrase that wolf says", minLength: 1, maxLength: 2 }],
    images: [
        { id: 0, description: "Image of the wolf" },
        { id: 1, description: "Profile picture of the guy who tweets about it" },
    ],
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
                src={images[1]}
                width={85}
                height={75}
                style={{
                    position: "absolute",
                    top: 8,
                    left: 16,
                }}
            />
            <img
                src={images[0]}
                width={700}
                height={470}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 107,
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/falklandWolf.png"
                width={814}
                height={691}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 65,
                    left: "15%",
                    width: "85%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 40,
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "white",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                }}
            >
                "{texts[0]}"
            </div>
        </div>
    ),
};
