import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const spongebobShowsSign: Template = {
    name: "spongebobShowsSign",
    width: 657,
    height: 493,
    texts: [{ id: 0, description: "what spongebob says while holding the sign", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "image on the sign" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/spongebobShowsSign.png"
                width={657}
                height={493}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={340}
                style={{ position: "absolute", top: 10, right: 35, borderColor: "black", borderWidth: 3 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "45%",
                    height: "55%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 7,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 4,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
