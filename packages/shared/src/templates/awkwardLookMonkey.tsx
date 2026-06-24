import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const awkwardLookMonkey: Template = {
    id: 27,
    name: "awkwardLookMonkey",
    width: 750,
    height: 750,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/awkwardLookMonkey.jpg"
                width={750}
                height={750}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "25%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 50,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
