import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const connor: Template = {
    name: "connor",
    width: 960,
    height: 1211,
    texts: [
        { id: 0, description: "option 1", minLength: 1, maxLength: 6 },
        { id: 1, description: "option 2", minLength: 1, maxLength: 6 },
        { id: 2, description: "option 3", minLength: 1, maxLength: 6 },
        { id: 3, description: "option 4 (the chosen one)", minLength: 1, maxLength: 6 },
        { id: 4, description: "the chosen option, repeated", minLength: 1, maxLength: 6 },
    ],
    images: [{ id: 0, description: "the chooser's face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/connor.png"
                width={960}
                height={1211}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={220}
                height={220}
                style={{
                    position: "absolute",
                    top: 630,
                    left: 610,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 96,
                    top: 0,
                    width: 768,
                    height: 121,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontFamily: "Comic Sans MS",
                    fontSize: 45,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 3,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 96,
                    top: 109,
                    width: 768,
                    height: 121,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontFamily: "Comic Sans MS",
                    fontSize: 45,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 3,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[1]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 96,
                    top: 242,
                    width: 768,
                    height: 121,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontFamily: "Comic Sans MS",
                    fontSize: 45,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 3,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[2]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 96,
                    top: 363,
                    width: 768,
                    height: 121,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    fontFamily: "Comic Sans MS",
                    fontSize: 45,
                    lineHeight: 1.05,
                    color: "#000000",
                    WebkitTextStrokeWidth: 3,
                    WebkitTextStrokeColor: "#ffffff",
                }}
            >
                {texts[3]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 96,
                    top: 969,
                    width: 768,
                    height: 303,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 55,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 5,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[4]}
            </div>
        </div>
    ),
};
