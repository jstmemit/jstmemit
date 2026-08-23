import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaHorrified: Template = {
    name: "kaguyasamaChikaHorrified",
    displayName: buildLocales("Horrified Chika", {
        [Locale.Russian]: "Чика в ужасе",
        [Locale.Ukrainian]: "Чіка в жаху",
        [Locale.Dutch]: "Geschokte Chika",
        [Locale.French]: "Chika horrifiée",
        [Locale.German]: "Entsetzte Chika",
        [Locale.Polish]: "Przerażona Chika",
        [Locale.SpanishES]: "Chika horrorizada",
        [Locale.SpanishLATAM]: "Chika horrorizada",
        [Locale.PortugueseBR]: "Chika horrorizada",
        [Locale.Turkish]: "Dehşete düşmüş Chika",
        [Locale.Italian]: "Chika inorridita",
        [Locale.Indonesian]: "Chika ketakutan",
        [Locale.Czech]: "Vyděšená Chika",
        [Locale.Japanese]: "怯えるチカ",
        [Locale.Korean]: "경악한 치카",
        [Locale.ChineseCN]: "惊恐的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 1350,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaHorrified.gif"
                width={498}
                height={280}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
