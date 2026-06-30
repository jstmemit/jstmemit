import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const bearArrest: Template = {
    name: "bearArrest",
    width: 640,
    height: 434,
    texts: [{ id: 0, description: "breaking news", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "arrested person" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/bearArrest.jpg"
                width={640}
                height={434}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: "15px",
                    width: "100%",
                    height: "100%",
                    maxHeight: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "start",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "#000000",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
