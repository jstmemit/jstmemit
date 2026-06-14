import type { Template } from "../../models/Template.ts";
import type { TemplateProps } from "../../models/TemplateProps.ts";
import * as React from "react";

export const explains: Template = {
    id: 1,
    name: "explains",
    width: 700,
    height: 800,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 5 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 5 },
    ],
    images: [{ id: 0, description: "background" }],
    element: ({ images }: TemplateProps) => (
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
                src={images[0]}
                width={450}
                height={400}
                style={{ position: "absolute", top: 20, left: 0 }}
            />
            <img
                src="https://raw.githubusercontent.com/jstmemit/jstmemit-bot/refs/heads/master/src/generation/visual/assets/images/explains.png"
                width={700}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            {/*<img*/}
            {/*  src={images[0]}*/}
            {/*  width={450}*/}
            {/*  height={400}*/}
            {/*  style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}*/}
            {/*/>*/}
        </div>
    ),
};
