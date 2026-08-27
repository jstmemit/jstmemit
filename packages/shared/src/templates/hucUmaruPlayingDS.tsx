import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruPlayingDS: Template = {
    name: "hucUmaruPlayingDS",
    displayName: buildLocales("Umaru playing DS", {
        [Locale.Russian]: "Умару играет в DS",
        [Locale.Ukrainian]: "Умару грає в DS",
        [Locale.Dutch]: "Umaru speelt op de DS",
        [Locale.French]: "Umaru jouant à la DS",
        [Locale.German]: "Umaru spielt DS",
        [Locale.Polish]: "Umaru grająca na DS",
        [Locale.SpanishES]: "Umaru jugando a la DS",
        [Locale.SpanishLATAM]: "Umaru jugando en la DS",
        [Locale.PortugueseBR]: "Umaru jogando no DS",
        [Locale.Turkish]: "DS oynayan Umaru",
        [Locale.Italian]: "Umaru che gioca al DS",
        [Locale.Indonesian]: "Umaru bermain DS",
        [Locale.Czech]: "Umaru hrající na DS",
        [Locale.Japanese]: "DSで遊ぶうまる",
        [Locale.Korean]: "DS 게임하는 우마루",
        [Locale.ChineseCN]: "玩DS的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 1840,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruPlayingDS.webp"
                width={540}
                height={304}
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
