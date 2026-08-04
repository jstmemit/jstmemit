import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const sgPlayer456HappyVsDepressed: Template = {
    name: "sgPlayer456HappyVsDepressed",
    displayName: buildLocales("Player 456 happy vs depressed", {
        [Locale.Russian]: "Игрок 456 счастлив и в депрессии",
        [Locale.Ukrainian]: "Гравець 456 щасливий та в депресії",
        [Locale.Dutch]: "Speler 456 blij vs depressief",
        [Locale.French]: "Joueur 456 heureux vs déprimé",
        [Locale.German]: "Spieler 456 glücklich vs depressiv",
        [Locale.Polish]: "Gracz 456 szczęśliwy vs w depresji",
        [Locale.SpanishES]: "Jugador 456 feliz vs deprimido",
        [Locale.SpanishLATAM]: "Jugador 456 feliz vs deprimido",
        [Locale.PortugueseBR]: "Jogador 456 feliz vs deprimido",
        [Locale.Turkish]: "Oyuncu 456 mutlu vs depresif",
        [Locale.Italian]: "Giocatore 456 felice vs depresso",
        [Locale.Indonesian]: "Pemain 456 senang vs depresi",
        [Locale.Czech]: "Hráč 456 šťastný vs v depresi",
        [Locale.Japanese]: "プレイヤー456 喜び vs 憂鬱",
        [Locale.Korean]: "참가자 456번 행복 vs 우울",
        [Locale.ChineseCN]: "玩家456 快乐对比抑郁",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.SquidGame],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 718,
    height: 714,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sgPlayer456HappyVsDepressed.png"
                width={359}
                height={714}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
