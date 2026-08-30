import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaDekuWinningRace: Template = {
    name: "mhaDekuWinningRace",
    displayName: buildLocales("Deku winning race", {
        [Locale.Russian]: "Деку побеждает в гонке",
        [Locale.Ukrainian]: "Деку перемагає в гонці",
        [Locale.Dutch]: "Deku wint de race",
        [Locale.French]: "Deku gagnant la course",
        [Locale.German]: "Deku gewinnt das Rennen",
        [Locale.Polish]: "Deku wygrywający wyścig",
        [Locale.SpanishES]: "Deku ganando la carrera",
        [Locale.SpanishLATAM]: "Deku ganando la carrera",
        [Locale.PortugueseBR]: "Deku vencendo a corrida",
        [Locale.Turkish]: "Yarışı kazanan Deku",
        [Locale.Italian]: "Deku che vince la gara",
        [Locale.Indonesian]: "Deku memenangkan balapan",
        [Locale.Czech]: "Deku vyhrávající závod",
        [Locale.Japanese]: "レースに勝つデク",
        [Locale.Korean]: "경주에서 이기는 데쿠",
        [Locale.ChineseCN]: "赢得比赛的出久",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 402,
    animationDuration: 2800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaDekuWinningRace.gif"
                width={540}
                height={302}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
