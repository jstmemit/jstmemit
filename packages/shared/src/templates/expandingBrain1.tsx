import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const expandingBrain1: Template = {
    name: "expandingBrain1",
    width: 857,
    height: 1202,
    texts: [
        { id: 0, description: "text1", minLength: 1, maxLength: 8 },
        { id: 1, description: "text2", minLength: 1, maxLength: 8 },
        { id: 2, description: "text3", minLength: 1, maxLength: 8 },
        { id: 3, description: "text4", minLength: 1, maxLength: 8 },
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
                src="https://files.wideunits.nl/jstmemit/images/templates/expandingBrain1.jpg"
                width={857}
                height={1202}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "25%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
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
                    top: "25%",
                    width: "50%",
                    height: "25%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
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
                    top: "50%",
                    width: "50%",
                    height: "25%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[2]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "75%",
                    width: "50%",
                    height: "25%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[3]}
            </div>
        </div>
    ),
};
