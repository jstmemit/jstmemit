import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const sleepyThinking: Template = {
    id: 23,
    name: "sleepyThinking",
    width: 885,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "dream thumbnail" }],
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
                width={590}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 320,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/sleepythinking.png"
                width={885}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    padding: "15px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 60,
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "white",
                    WebkitTextStrokeWidth: 10,
                    WebkitTextStrokeColor: "black",
                    textAlign: "center",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
