import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const catIsCalling: Template = {
    name: "catIsCalling",
    displayName: buildLocales("Cat is calling", {
        [Locale.Russian]: "Кот звонит",
        [Locale.Ukrainian]: "Кіт телефонує",
        [Locale.Dutch]: "Kat belt",
        [Locale.French]: "Le chat appelle",
        [Locale.German]: "Katze ruft an",
        [Locale.Polish]: "Kot dzwoni",
        [Locale.SpanishES]: "El gato está llamando",
        [Locale.SpanishLATAM]: "El gato está llamando",
        [Locale.PortugueseBR]: "O gato está ligando",
        [Locale.Turkish]: "Kedi arıyor",
        [Locale.Italian]: "Il gatto sta chiamando",
        [Locale.Indonesian]: "Kucing menelepon",
        [Locale.Czech]: "Kočka volá",
        [Locale.Japanese]: "電話する猫",
        [Locale.Korean]: "전화하는 고양이",
        [Locale.ChineseCN]: "猫咪打电话",
    }),
    topics: [Topic.Cartoons],
    types: [Type.TextTop],
    width: 1498,
    height: 936,
    texts: [{ id: 0, description: "what the cat says", minLength: 1, maxLength: 10 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/catIsCalling.png"
                width={1498}
                height={936}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "45%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        textShadow: "4px 4px 8px #fd9da8",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
