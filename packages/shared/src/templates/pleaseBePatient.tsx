import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const pleaseBePatient: Template = {
    name: "pleaseBePatient",
    topics: [Topic.Anime, Topic.Reaction],
    types: [Type.textRightWithBackground, Type.faceImage, Type.defaultText],
    width: 1051,
    height: 1032,
    texts: [
        {
            id: 0,
            description: "Phrase that a person with 'please be patient' blue cap says",
            minLength: 1,
            maxLength: 15,
        },
    ],
    images: [{ id: 0, description: "Person with 'please be patient' blue cap" }],
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
                src={images[0]}
                width={410}
                height={410}
                style={{
                    position: "absolute",
                    top: 510,
                    left: 10,
                    borderRadius: 256,
                    borderColor: "black",
                    borderWidth: 8,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/pleaseBePatient.png"
                width={1051}
                height={1032}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 250,
                    right: 125,
                    width: "35%",
                    height: "55%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 10,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
