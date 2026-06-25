import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const expandingBrain: Template = {
    id: 38,
    name: "expandingBrain",
    width: 1440,
    height: 1403,
    texts: [
        { id: 0, description: "text1", minLength: 1, maxLength: 8 },
        { id: 1, description: "text2", minLength: 1, maxLength: 8 },
        { id: 2, description: "text3", minLength: 1, maxLength: 8 },
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
                src="https://files.wideunits.nl/jstmemit/images/templates/expandingBrain.jpg"
                width={1440}
                height={1403}
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "54%",
                    height: "33%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 60,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "33%",
                    width: "54%",
                    height: "33%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 60,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[1]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "66%",
                    width: "54%",
                    height: "34%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 60,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[2]}
            </div>
        </div>
    ),
};