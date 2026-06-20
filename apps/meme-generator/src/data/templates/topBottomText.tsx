import type { Template } from "@jstmemit/shared/models/Template";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import * as React from "react";

export const topBottomText: Template = {
    id: 1,
    name: "topBottomText",
    width: 800,
    height: 800,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 5 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 5 },
    ],
    images: [{ id: 0, description: "background" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
                backgroundColor: "#000",
            }}
        >
            <img
                src={images[0]}
                width={800}
                height={800}
                style={{ position: "absolute", top: 0, left: 0, opacity: 0.6 }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 20,
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
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
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
                {texts[1]}
            </div>
        </div>
    ),
};
