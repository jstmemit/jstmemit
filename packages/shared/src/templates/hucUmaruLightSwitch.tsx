import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruLightSwitch: Template = {
    name: "hucUmaruLightSwitch",
    displayName: buildLocales("Umaru at the light switch", {
        [Locale.Russian]: "Умару щелкает выключателем",
        [Locale.Ukrainian]: "Умару клацає вимикачем",
        [Locale.Dutch]: "Umaru bij de lichtschakelaar",
        [Locale.French]: "Umaru avec l'interrupteur",
        [Locale.German]: "Umaru am Lichtschalter",
        [Locale.Polish]: "Umaru przy włączniku światła",
        [Locale.SpanishES]: "Umaru con el interruptor de luz",
        [Locale.SpanishLATAM]: "Umaru con el apagador de luz",
        [Locale.PortugueseBR]: "Umaru no interruptor de luz",
        [Locale.Turkish]: "Umaru elektrik düğmesiyle",
        [Locale.Italian]: "Umaru all'interruttore della luce",
        [Locale.Indonesian]: "Umaru main saklar lampu",
        [Locale.Czech]: "Umaru u vypínače",
        [Locale.Japanese]: "電気のスイッチで遊ぶうまる",
        [Locale.Korean]: "전등 스위치 만지는 우마루",
        [Locale.ChineseCN]: "玩电灯开关的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 371,
    animationDuration: 2950,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruLightSwitch.gif"
                width={498}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
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
