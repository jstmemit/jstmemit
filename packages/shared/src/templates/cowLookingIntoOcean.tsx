import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const cowLookingIntoOcean: Template = {
    id: 9,
    name: "cowLookingIntoOcean",
    width: 403,
    height: 352,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "people in the ocean" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/cowlookingintoocean.png"
                width={403}
                height={352}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 180,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 200,
                    left: 40,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 90,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    fontFamily: "Comic Sans MS",
                    fontSize: 26,
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
