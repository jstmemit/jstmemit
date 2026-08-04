import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dandadanTurboGrannyCatSquintedEyes1: Template = {
    name: "dandadanTurboGrannyCatSquintedEyes1",
    displayName: buildLocales("Turbo Granny cat squinted eyes 1", {
        [Locale.Russian]: "Кот Турбо Бабуля прищурился 1",
        [Locale.Ukrainian]: "Кіт Турбо Бабуся примружився 1",
        [Locale.Dutch]: "Turbo Granny kat met toegeknepen ogen 1",
        [Locale.French]: "Chat Turbo Granny les yeux plissés 1",
        [Locale.German]: "Turbo-Granny-Katze mit zusammengekniffenen Augen 1",
        [Locale.Polish]: "Kot Turbo Babcia ze zmrużonymi oczami 1",
        [Locale.SpanishES]: "Gato Turbo Granny con ojos entrecerrados 1",
        [Locale.SpanishLATAM]: "Gato Turbo Granny con ojos entrecerrados 1",
        [Locale.PortugueseBR]: "Gato Turbo Granny com olhos semicerrados 1",
        [Locale.Turkish]: "Turbo Granny kedisi gözleri kısık 1",
        [Locale.Italian]: "Gatto Turbo Granny con occhi socchiusi 1",
        [Locale.Indonesian]: "Kucing Turbo Granny mata menyipit 1",
        [Locale.Czech]: "Kocour Turbo Granny s přimhouřenýma očima 1",
        [Locale.Japanese]: "目を細めるターボグラニー猫 1",
        [Locale.Korean]: "눈을 가늘게 뜬 터보 그래니 고양이 1",
        [Locale.ChineseCN]: "Turbo Granny猫眯眼 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextTopWithBackground],
    width: 1395,
    height: 1307,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanTurboGrannyCatSquintedEyes.png"
                width={1395}
                height={1057}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "250px",
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
                        fontSize: 70,
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
