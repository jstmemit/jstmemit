import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const noragamiYatoNoragamiMoneyFloor1: Template = {
    name: "noragamiYatoNoragamiMoneyFloor1",
    displayName: buildLocales("Yato Noragami money floor 1", {
        [Locale.Russian]: "Ято Норагами деньги на полу 1",
        [Locale.Ukrainian]: "Ято Норагамі гроші на підлозі 1",
        [Locale.Dutch]: "Yato Noragami geld op vloer 1",
        [Locale.French]: "Yato Noragami argent sur le sol 1",
        [Locale.German]: "Yato Noragami Geld auf dem Boden 1",
        [Locale.Polish]: "Yato Noragami pieniądze na podłodze 1",
        [Locale.SpanishES]: "Yato Noragami dinero en el suelo 1",
        [Locale.SpanishLATAM]: "Yato Noragami dinero en el piso 1",
        [Locale.PortugueseBR]: "Yato Noragami dinheiro no chão 1",
        [Locale.Turkish]: "Yato Noragami yerdeki paralar 1",
        [Locale.Italian]: "Yato Noragami soldi sul pavimento 1",
        [Locale.Indonesian]: "Yato Noragami uang di lantai 1",
        [Locale.Czech]: "Yato Noragami peníze na podlaze 1",
        [Locale.Japanese]: "夜ト ノラガミ 床の札束 1",
        [Locale.Korean]: "야토 노라가미 바닥의 돈 1",
        [Locale.ChineseCN]: "夜斗 野良神 满地是钱 1",
    }),
    topics: [Topic.Anime, Topic.Noragami],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 447,
    height: 365,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Yato`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/noragamiYatoNoragamiMoneyFloor1.png"
                width={447}
                height={275}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 195,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-160deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
                        lineClamp: 2,
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
