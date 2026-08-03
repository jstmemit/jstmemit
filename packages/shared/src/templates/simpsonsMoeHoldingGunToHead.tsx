import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsMoeHoldingGunToHead: Template = {
    name: "simpsonsMoeHoldingGunToHead",
    displayName: "Simpsons Moe holding gun to head",
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 500,
    height: 477,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Moe`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsMoeHoldingGunToHead.jpg"
                width={500}
                height={377}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{
                    position: "absolute",
                    top: 60,
                    left: 190,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
