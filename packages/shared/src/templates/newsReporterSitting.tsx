import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const newsReporterSitting: Template = {
    id: 24,
    name: "newsReporterSitting",
    width: 766,
    height: 496,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 5 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 5 },
    ],
    images: [{ id: 0, description: "breaking news" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src={images[0]}
                width={766}
                height={496}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/newsreportersitting.png"
                width={766}
                height={496}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 60,
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "white",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                    textAlign: "center",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 60,
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "white",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                    textAlign: "center",
                }}
            >
                {texts[1]}
            </div>
        </div>
    ),
};
