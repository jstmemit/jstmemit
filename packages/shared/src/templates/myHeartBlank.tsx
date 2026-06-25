import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const myHeartBlank: Template = {
    id: 47,
    name: "myHeartBlank",
    width: 680,
    height: 602,
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
                src="https://files.wideunits.nl/jstmemit/images/templates/myHeartBlank.jpg"
                width={680}
                height={602}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "57%",
                    width: "51%",
                    height: "29%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
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
                    bottom: "27%",
                    width: "51%",
                    height: "30%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
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
                    bottom: 0,
                    width: "51%",
                    height: "27%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
                    lineHeight: 1.05,
                    color: "#000000",
                }}
            >
                {texts[2]}
            </div>
        </div>
    ),
};
