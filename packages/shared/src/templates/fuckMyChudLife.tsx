import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const fuckMyChudLife: Template = {
    name: "fuckMyChudLife",
    width: 776,
    height: 999,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 4 }],
    images: [{ id: 0, description: "meal image that would be posted on r/kitchencels" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/fuckMyChudLife.png"
                width={776}
                height={999}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img src={images[0]} width={776} height={480} style={{ position: "absolute", top: 520, left: 0 }} />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 10,
                    width: "100%",
                    padding: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 55,
                    lineHeight: 1.05,
                    color: "#fff",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
