import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const wojackPoint: Template = {
    id: 24,
    name: "wojackPoint",
    width: 512,
    height: 512,
    texts: [{ id: 0, description: "what wojak says", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "pointed at image" }],
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
                src={images[0]}
                width={512}
                height={512}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/wojackpoint.png"
                width={512}
                height={512}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 164,
                    top: 358,
                    width: 205,
                    height: 128,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 35,
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
