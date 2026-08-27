import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konYuiDoublePeace: Template = {
    name: "konYuiDoublePeace",
    displayName: buildLocales("Yui showing double peace signs", {
        [Locale.Russian]: "Юи показывает двойной знак мира",
        [Locale.Ukrainian]: "Юї показує подвійний знак миру",
        [Locale.Dutch]: "Yui maakt een dubbel vredesteken",
        [Locale.French]: "Yui faisant un double signe de paix",
        [Locale.German]: "Yui zeigt das doppelte Peace-Zeichen",
        [Locale.Polish]: "Yui pokazująca podwójny znak pokoju",
        [Locale.SpanishES]: "Yui haciendo el doble signo de la paz",
        [Locale.SpanishLATAM]: "Yui haciendo el doble signo de la paz",
        [Locale.PortugueseBR]: "Yui fazendo o sinal de paz duplo",
        [Locale.Turkish]: "Çifte zafer işareti yapan Yui",
        [Locale.Italian]: "Yui che fa il doppio segno di pace",
        [Locale.Indonesian]: "Yui menunjukkan pose peace ganda",
        [Locale.Czech]: "Yui ukazující dvojité znamení míru",
        [Locale.Japanese]: "ダブルピースをする唯",
        [Locale.Korean]: "더블 피스를 하는 유이",
        [Locale.ChineseCN]: "比双V手的唯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 525,
    animationDuration: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konYuiDoublePeace.gif"
                width={498}
                height={435}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
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
