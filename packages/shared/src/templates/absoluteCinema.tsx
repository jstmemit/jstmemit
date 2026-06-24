import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const absoluteCinema: Template = {
    id: 25,
    name: "absoluteCinema",
    width: 1230,
    height: 1422,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "background" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/absolutecinema.png"
                width={1230}
                height={1422}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 500,
                    left: 415,
                    filter: "grayscale(100%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 100,
                    padding: "15px",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 90,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
