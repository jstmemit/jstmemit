import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsHomerInLesbianBar: Template = {
    name: "simpsonsHomerInLesbianBar",
    displayName: buildLocales("Homer in lesbian bar", {
        [Locale.Russian]: "Гомер в лесбийском баре",
        [Locale.Ukrainian]: "Гомер у лесбійському барі",
        [Locale.Dutch]: "Homer in lesbische bar",
        [Locale.French]: "Homer dans un bar lesbien",
        [Locale.German]: "Homer in Lesbenbar",
        [Locale.Polish]: "Homer w barze dla lesbijek",
        [Locale.SpanishES]: "Homer en bar de lesbianas",
        [Locale.SpanishLATAM]: "Homero en bar de lesbianas",
        [Locale.PortugueseBR]: "Homer em bar de lésbicas",
        [Locale.Turkish]: "Homer lezbiyen barında",
        [Locale.Italian]: "Homer nel bar per lesbiche",
        [Locale.Indonesian]: "Homer di bar lesbian",
        [Locale.Czech]: "Homer v lesbickém baru",
        [Locale.Japanese]: "レズビアンバーにいるホーマー",
        [Locale.Korean]: "레즈비언 바에 간 호머",
        [Locale.ChineseCN]: "霍默在女同性恋酒吧",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 800,
    height: 580,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Homer`s face" },
        { id: 1, description: "faces of all girls" },
    ],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsHomerInLesbianBar.jpg"
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
                        fontFamily: font,
                        fontSize: 40,
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
