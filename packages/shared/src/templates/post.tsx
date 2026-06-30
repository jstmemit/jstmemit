import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const post: Template = {
    name: "post",
    width: 1108,
    height: 772,
    texts: [
        { id: 0, description: "post author's name", minLength: 1, maxLength: 2 },
        { id: 1, description: "post text", minLength: 5, maxLength: 15 },
    ],
    images: [{ id: 0, description: "post author's profile picture" }],
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
                src="https://files.wideunits.nl/jstmemit/images/templates/post.png"
                width={1108}
                height={772}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderColor: "#1b1b1a",
                    borderWidth: 24,
                    borderRadius: 80,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 170,
                    top: 40,
                    width: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Impact",
                    fontSize: 50,
                    lineHeight: 1.05,
                    color: "#fff",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 200,
                    width: "100%",
                    padding: "40px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Impact",
                    fontSize: 80,
                    lineHeight: 1.05,
                    color: "#fff",
                }}
            >
                {texts[1]}
            </div>
        </div>
    ),
};
