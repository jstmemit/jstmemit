import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";

export const explains: Template = {
    name: "explains",
    width: 700,
    height: 800,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 3 }],
    images: [{ id: 0, description: "content of whiteboard" }],
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
            <img src={images[0]} width={455} height={360} style={{ position: "absolute", top: 20, left: 0 }} />
            <img src={images[0]} width={400} height={320} style={{ position: "absolute", top: 435, left: 0 }} />
            <img
                src="https://raw.githubusercontent.com/jstmemit/jstmemit-bot/refs/heads/master/src/generation/visual/assets/images/explains.png"
                width={700}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Comic Sans MS",
                    fontSize: 80,
                    lineHeight: 1.05,
                    color: "#ffffff",
                    WebkitTextStrokeWidth: 6,
                    WebkitTextStrokeColor: "#000000",
                }}
            >
                {texts[0]}
            </div>
        </div>
    ),
};
