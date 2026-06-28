import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const creativeMetaphor: Template = {
    name: "creativeMetaphor",
    width: 1202,
    height: 1028,
    texts: [
        { id: 0, description: "Name of the person who posted a creative metaphor", minLength: 1, maxLength: 2 },
        { id: 1, description: "Creative metaphor", minLength: 2, maxLength: 6 },
    ],
    images: [{ id: 0, description: "Person who posted a creative metaphor" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/creativeMetaphor.png"
                width={1202}
                height={1028}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 160,
                    bottom: 200,
                    width: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 48,
                    lineHeight: 1.05,
                    color: "#fff",
                }}
            >
                {texts[1]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 160,
                    bottom: 270,
                    width: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 43,
                    lineHeight: 1.05,
                    color: "#808080",
                }}
            >
                @{texts[0]}
            </div>
            <img
                src={images[0]}
                width={155}
                height={155}
                style={{
                    position: "absolute",
                    bottom: 190,
                    left: -10,
                    borderRadius: 256,
                }}
            />
        </div>
    ),
};
