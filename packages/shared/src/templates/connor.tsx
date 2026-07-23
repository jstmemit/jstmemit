import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const connor: Template = {
    name: "connor",
    topics: [Topic.Games, Topic.Misc],
    types: [Type.textTopWithBackground, Type.fourOption, Type.textBottom, Type.faceImage],
    width: 960,
    height: 1211,
    texts: [
        { id: 0, description: "option 1", minLength: 1, maxLength: 12 },
        { id: 1, description: "option 2", minLength: 1, maxLength: 12 },
        { id: 2, description: "option 3", minLength: 1, maxLength: 12 },
        { id: 3, description: "option 4 (the chosen one)", minLength: 1, maxLength: 20 },
        { id: 4, description: "the chosen option, repeated", minLength: 1, maxLength: 12 },
    ],
    images: [{ id: 0, description: "the chooser's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/connor.png"
                width={960}
                height={1211}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={220}
                height={220}
                style={{
                    position: "absolute",
                    top: 630,
                    left: 610,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: 0,
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
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
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#ffffff",
                        width: "100%",
                    }}
                >
                    {texts[0]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "10%",
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
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
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#ffffff",
                        width: "100%",
                    }}
                >
                    {texts[1]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "20%",
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
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
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#ffffff",
                        width: "100%",
                    }}
                >
                    {texts[2]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    width: "90%",
                    minHeight: "10%",
                    maxHeight: "20%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: 45,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                        WebkitTextStrokeWidth: 3,
                        WebkitTextStrokeColor: "#ffffff",
                        width: "100%",
                    }}
                >
                    {texts[3]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                    padding: "10px",
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
                        fontSize: 55,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#ffffff",
                        WebkitTextStrokeWidth: 5,
                        WebkitTextStrokeColor: "#000000",
                    }}
                >
                    {texts[4]}
                </div>
            </div>
        </div>
    ),
};
