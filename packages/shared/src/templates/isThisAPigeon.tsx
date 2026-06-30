import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const isThisAPigeon: Template = {
    name: "isThisAPigeon",
    width: 1587,
    height: 1425,
    texts: [{ id: 0, description: "question", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "the thing in place of the butterfly" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/isthisapigeon.png"
                width={1587}
                height={1425}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={600}
                height={600}
                style={{ position: "absolute", top: 120, right: 15, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "auto",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Impact",
                    fontSize: 100,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
