import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const catIsCalling: Template = {
    id: 61,
    name: "catIsCalling",
    width: 1498,
    height: 936,
    texts: [{ id: 0, description: "what the cat says", minLength: 1, maxLength: 5 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/catIsCalling.png"
                width={1498}
                height={936}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: 180,
                    width: "80%",
                    display: "flex",
                    textAlign: "left",
                    fontFamily: "Comic Sans MS",
                    fontSize: 100,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 7,
                    WebkitTextStrokeColor: "#fd9da8",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
