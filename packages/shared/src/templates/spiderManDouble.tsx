import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const spiderManDouble: Template = {
    name: "spiderManDouble",
    width: 560,
    height: 376,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [
        { id: 0, description: "first spiderman`s face" },
        { id: 1, description: "second spiderman`s face" },
    ],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/spiderManDouble.jpg"
                width={560}
                height={376}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 140,
                    right: 120,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    padding: "5px",
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 30,
                    lineHeight: 1.05,
                    color: "#000000",
                    // backgroundColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
