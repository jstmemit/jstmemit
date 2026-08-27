import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruInterruptedDuringGaming: Template = {
    name: "hucUmaruInterruptedDuringGaming",
    displayName: buildLocales("Umaru interrupted during gaming", {
        [Locale.Russian]: "Умару отвлекли от игры",
        [Locale.Ukrainian]: "Умару відволікли від гри",
        [Locale.Dutch]: "Umaru gestoord tijdens gamen",
        [Locale.French]: "Umaru interrompue pendant qu'elle joue",
        [Locale.German]: "Umaru beim Zocken gestört",
        [Locale.Polish]: "Umaru oderwana od gry",
        [Locale.SpanishES]: "Umaru interrumpida mientras juega",
        [Locale.SpanishLATAM]: "Umaru interrumpida mientras juega",
        [Locale.PortugueseBR]: "Umaru interrompida durante o jogo",
        [Locale.Turkish]: "Oyun oynarken bölünen Umaru",
        [Locale.Italian]: "Umaru interrotta mentre gioca",
        [Locale.Indonesian]: "Umaru diganggu saat main game",
        [Locale.Czech]: "Umaru vyrušena při hraní",
        [Locale.Japanese]: "ゲーム中に邪魔されたうまる",
        [Locale.Korean]: "게임 중 방해받은 우마루",
        [Locale.ChineseCN]: "打游戏时被打断的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 368,
    animationDuration: 2970,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruInterruptedDuringGaming.gif"
                width={498}
                height={278}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                        fontFamily: font,
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
