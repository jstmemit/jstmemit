import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const stonks1: Template = {
    name: "stonks1",
    width: 1858,
    height: 1304,
    texts: [{ id: 0, description: "the phrase", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "stonks guy`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/stonks-without-stonks.jpg"
                width={1858}
                height={1304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{ position: "absolute", top: 60, left: 160, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 100,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 4,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
