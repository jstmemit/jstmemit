import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruGamingAndSliding: Template = {
    name: "hucUmaruGamingAndSliding",
    displayName: buildLocales("Umaru gaming and sliding", {
        [Locale.Russian]: "Умару играет и скользит",
        [Locale.Ukrainian]: "Умару грає та ковзає",
        [Locale.Dutch]: "Umaru aan het gamen en glijden",
        [Locale.French]: "Umaru qui joue et glisse",
        [Locale.German]: "Umaru zockt und rutscht",
        [Locale.Polish]: "Umaru gra i ślizga się",
        [Locale.SpanishES]: "Umaru jugando y deslizándose",
        [Locale.SpanishLATAM]: "Umaru jugando y deslizándose",
        [Locale.PortugueseBR]: "Umaru jogando e deslizando",
        [Locale.Turkish]: "Umaru oyun oynuyor ve kayıyor",
        [Locale.Italian]: "Umaru che gioca e scivola",
        [Locale.Indonesian]: "Umaru bermain game dan meluncur",
        [Locale.Czech]: "Umaru hraje a klouže se",
        [Locale.Japanese]: "ゲームして滑るうまる",
        [Locale.Korean]: "게임하며 미끄러지는 우마루",
        [Locale.ChineseCN]: "打游戏并滑行的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 1800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruGamingAndSliding.gif"
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
