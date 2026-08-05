import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaBenderScared: Template = {
    name: "futuramaBenderScared",
    displayName: buildLocales("Bender scared", {
        [Locale.Russian]: "Испуганный Бендер",
        [Locale.Ukrainian]: "Наляканий Бендер",
        [Locale.Dutch]: "Bange Bender",
        [Locale.French]: "Bender effrayé",
        [Locale.German]: "Bender verängstigt",
        [Locale.Polish]: "Przestraszony Bender",
        [Locale.SpanishES]: "Bender asustado",
        [Locale.SpanishLATAM]: "Bender asustado",
        [Locale.PortugueseBR]: "Bender assustado",
        [Locale.Turkish]: "Korkan Bender",
        [Locale.Italian]: "Bender spaventato",
        [Locale.Indonesian]: "Bender ketakutan",
        [Locale.Czech]: "Vyděšený Bender",
        [Locale.Japanese]: "怯えるベンダー",
        [Locale.Korean]: "겁먹은 벤더",
        [Locale.ChineseCN]: "害怕的本德",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottom, Type.ObjectImage],
    width: 480,
    height: 385,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Bender`s face" },
        { id: 1, description: "monitor image" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaBenderScared.png"
                width={480}
                height={385}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "20%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={120}
                height={60}
                style={{
                    position: "absolute",
                    top: "41%",
                    right: "10%",
                    objectFit: "cover",
                    backgroundColor: "red",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
