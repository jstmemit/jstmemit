import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const applyingForJobsWithFunnyPfp: Template = {
    name: "applyingForJobsWithFunnyPfp",
    width: 933,
    height: 1051,
    texts: [
        { id: 0, description: "post author's name", minLength: 1, maxLength: 2 },
        { id: 1, description: "post author's tag", minLength: 1, maxLength: 1 },
    ],
    images: [{ id: 0, description: "Inappropriate profile picture" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={750}
                height={750}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/applyingForJobsWithFunnyPfp.png"
                width={933}
                height={1051}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 110,
                    top: 0,
                    width: "100%",
                    maxWidth: "59%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#fff",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 110,
                    top: 55,
                    width: "100%",
                    maxWidth: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 35,
                    lineHeight: 1.05,
                    color: "#808080",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                @{texts[1]}
            </div>
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: 24,
                }}
            />
        </div>
    ),
};
