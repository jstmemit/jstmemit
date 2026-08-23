import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaFrySleeplessInsomnia: Template = {
    name: "futuramaFrySleeplessInsomnia",
    displayName: buildLocales("Fry sleepless insomnia", {
        [Locale.Russian]: "Бессонница Фрая",
        [Locale.Ukrainian]: "Безсоння Фрая",
        [Locale.Dutch]: "Fry slapeloosheid",
        [Locale.French]: "Insomnie de Fry",
        [Locale.German]: "Frys Schlaflosigkeit",
        [Locale.Polish]: "Bezsenność Fry'a",
        [Locale.SpanishES]: "Insomnio de Fry",
        [Locale.SpanishLATAM]: "Insomnio de Fry",
        [Locale.PortugueseBR]: "Insônia do Fry",
        [Locale.Turkish]: "Uykusuz Fry",
        [Locale.Italian]: "Insonnia di Fry",
        [Locale.Indonesian]: "Fry insomnia tak bisa tidur",
        [Locale.Czech]: "Nespavost Frye",
        [Locale.Japanese]: "不眠症のフライ",
        [Locale.Korean]: "불면증 프라이",
        [Locale.ChineseCN]: "弗莱失眠",
    }),
    topics: [Topic.Futurama, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextCenterWithBackground, Type.FourOption],
    width: 604,
    height: 479,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Fry`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaFrySleeplessInsomnia.jpg"
                width={604}
                height={479}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "65%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: "73%",
                    left: "13%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "204px",
                    width: "100%",
                    height: "15%",
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
