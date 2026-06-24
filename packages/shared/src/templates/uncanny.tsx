import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const uncanny: Template = {
    id: 11,
    name: "uncanny",
    width: 950,
    height: 500,
    texts: [
        { id: 0, description: "left caption", minLength: 1, maxLength: 4 },
        { id: 1, description: "right caption", minLength: 1, maxLength: 4 },
    ],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://files.wideunits.nl/jstmemit/images/templates/uncanny.png"
                width={950}
                height={500}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 95,
                    top: 350,
                    width: 250,
                    height: 125,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Impact",
                    fontSize: 52,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 5,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 608,
                    top: 350,
                    width: 250,
                    height: 125,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Impact",
                    fontSize: 52,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 5,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[1]}
            </div>
        </div>
    ),
};
