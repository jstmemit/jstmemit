import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const explains: Template = {
    id: 2,
    name: "explains",
    width: 700,
    height: 800,
    texts: [],
    images: [
        { id: 0, description: "content of whiteboard" },
        { id: 1, description: "person who points on the whiteboard" },
    ],
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
                width={455}
                height={360}
                style={{ position: "absolute", top: 20, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={320}
                style={{ position: "absolute", top: 435, left: 0 }}
            />
            <img
                src="https://raw.githubusercontent.com/jstmemit/jstmemit-bot/refs/heads/master/src/generation/visual/assets/images/explains.png"
                width={700}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 5,
                    right: 55,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
