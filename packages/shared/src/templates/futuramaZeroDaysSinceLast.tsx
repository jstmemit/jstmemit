import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";

export const futuramaZeroDaysSinceLast: Template = {
    name: "futuramaZeroDaysSinceLast",
    topics: [Topic.Futurama, Topic.Cartoons],
    width: 640,
    height: 469,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 3 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://files.wideunits.nl/jstmemit/images/templates/futuramaZeroDaysSinceLast.jpg"
                width={640}
                height={469}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "22%",
                    bottom: "33%",
                    width: "45%",
                    height: "20%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transform: "rotate(3deg)",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        color: "#A72227",
                        WebkitTextStrokeWidth: 1,
                        WebkitTextStrokeColor: "#000000",
                        textTransform: "uppercase",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
