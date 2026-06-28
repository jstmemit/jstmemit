import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const spongebobShowsSign: Template = {
    id: 62,
    name: "spongebobShowsSign",
    width: 657,
    height: 493,
    texts: [{ id: 0, description: "what spongebob says while holding the sign", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "image on the sign" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/spongebobShowsSign.png"
                width={657}
                height={493}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={340}
                style={{ position: "absolute", top: 10, right: 35, borderColor: "black", borderWidth: 3 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 10,
                    top: 100,
                    width: "50%",
                    padding: "10px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#fff",
                    WebkitTextStrokeWidth: 7,
                    WebkitTextStrokeColor: "black",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
