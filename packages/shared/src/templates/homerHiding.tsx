import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const homerHiding: Template = {
    name: "homerHiding",
    width: 600,
    height: 600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "the person hiding" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/homerhiding.jpg"
                width={600}
                height={600}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{ position: "absolute", top: 35, left: 110, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", top: 40, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", bottom: 110, left: 120, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{ position: "absolute", bottom: 110, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
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
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 44,
                        lineHeight: 1.05,
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
