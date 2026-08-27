import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanTurboGrannyCatSquintedEyes: Template = {
    name: "dandadanTurboGrannyCatSquintedEyes",
    displayName: buildLocales("Turbo Granny cat squinted eyes", {
        [Locale.Russian]: "Кот Турбо Бабуля прищурился",
        [Locale.Ukrainian]: "Кіт Турбо Бабуся примружився",
        [Locale.Dutch]: "Turbo Granny kat met toegeknepen ogen",
        [Locale.French]: "Chat Turbo Granny aux yeux plissés",
        [Locale.German]: "Turbo-Granny-Katze mit zusammengekniffenen Augen",
        [Locale.Polish]: "Kot Turbo Babcia ze zmrużonymi oczami",
        [Locale.SpanishES]: "Gato Turbo Granny con ojos entrecerrados",
        [Locale.SpanishLATAM]: "Gato Turbo Granny con ojos entrecerrados",
        [Locale.PortugueseBR]: "Gato Turbo Granny com olhos semicerrados",
        [Locale.Turkish]: "Gözlerini kısmış Turbo Granny kedisi",
        [Locale.Italian]: "Gatto Turbo Granny con gli occhi socchiusi",
        [Locale.Indonesian]: "Kucing Turbo Granny menyipitkan mata",
        [Locale.Czech]: "Kocour Turbo Granny s přimhouřenýma očima",
        [Locale.Japanese]: "目を細めるターボババア猫",
        [Locale.Korean]: "눈을 가늘게 뜬 터보 할멈 고양이",
        [Locale.ChineseCN]: "眯眼的高速婆婆猫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextLeftWithBackground],
    width: 2790,
    height: 1057,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanTurboGrannyCatSquintedEyes.png"
                width={1395}
                height={1057}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
