import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const crowdFromAngryToHappy: Template = {
    id: 28,
    name: "crowdFromAngryToHappy",
    width: 716,
    height: 700,
    texts: [
        { id: 0, description: "text1", minLength: 1, maxLength: 2 },
        { id: 1, description: "text2", minLength: 1, maxLength: 2 },
    ],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/crowdFromAngryToHappy.jpg"
                width={716}
                height={700}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 110,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    bottom: 190,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "15%",
                    padding: "50px",
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
                    top: "50%",
                    width: "50%",
                    height: "15%",
                    padding: "50px",
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
        </div>
    ),
};
