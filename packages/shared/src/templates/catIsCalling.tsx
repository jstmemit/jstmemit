import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const catIsCalling: Template = {
    name: "catIsCalling",
    topics: [Topic.Misc],
    types: [Type.textTop],
    width: 1498,
    height: 936,
    texts: [{ id: 0, description: "what the cat says", minLength: 1, maxLength: 10 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/catIsCalling.png"
                width={1498}
                height={936}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "45%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
                        lineHeight: 1.05,
                        color: "#000000",
                        WebkitTextStrokeWidth: 7,
                        WebkitTextStrokeColor: "#fd9da8",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
