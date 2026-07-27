import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const futuramaZeroDaysSinceLast: Template = {
    name: "futuramaZeroDaysSinceLast",
    topics: [Topic.Futurama, Topic.Cartoons],
    types: [Type.textCenterWithBackground],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/futuramaZeroDaysSinceLast.jpg"
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transform: "rotate(3deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        fontWeight: 700,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#A72227",
                        textTransform: "uppercase",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
