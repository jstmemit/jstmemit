import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const looksAtPaperAngry: Template = {
    name: "looksAtPaperAngry",
    width: 768,
    height: 727,
    texts: [{ id: 0, description: "what's written on the paper", minLength: 1, maxLength: 3 }],
    images: [
        { id: 0, description: "person passing the note" },
        { id: 1, description: "person reading it angrily" },
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
                src="https://files.wideunits.nl/jstmemit/images/templates/looksatpaperangry.png"
                width={768}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <img
                src={images[0]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 36,
                    left: 106,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 11,
                    left: 466,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 340,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    left: 370,
                    top: 436,
                    width: 180,
                    height: 182,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Impact",
                    fontSize: 40,
                    lineHeight: 1.05,
                    color: "black",
                    WebkitTextStrokeWidth: 3,
                    WebkitTextStrokeColor: "white",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
