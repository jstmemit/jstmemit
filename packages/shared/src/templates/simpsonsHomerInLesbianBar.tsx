import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const simpsonsHomerInLesbianBar: Template = {
    name: "simpsonsHomerInLesbianBar",
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.faceImage, Type.textBottomWithBackground],
    width: 800,
    height: 580,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Homer`s face" },
        { id: 1, description: "faces of all girls" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/simpsonsHomerInLesbianBar.jpg"
                width={800}
                height={480}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 250,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 190,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: -20,
                    left: 280,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 20,
                    left: 350,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 470,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 540,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: -10,
                    right: 110,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: 70,
                    right: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: 80,
                    right: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: 90,
                    right: 220,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 100,
                    left: -10,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 70,
                    left: 90,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 150,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 130,
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
                    overflow: "hidden",
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
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.15em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
