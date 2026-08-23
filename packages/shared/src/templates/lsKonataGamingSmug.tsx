import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsKonataGamingSmug: Template = {
    name: "lsKonataGamingSmug",
    displayName: buildLocales("Smug gaming Konata", {
        [Locale.Russian]: "Самодовольная Коната за игрой",
        [Locale.Ukrainian]: "Самозадоволена Коната за грою",
        [Locale.Dutch]: "Zelfingenomen gamende Konata",
        [Locale.French]: "Konata suffisante qui joue",
        [Locale.German]: "Selbstgefällig zockende Konata",
        [Locale.Polish]: "Zadowolona z siebie grająca Konata",
        [Locale.SpanishES]: "Konata presumida jugando",
        [Locale.SpanishLATAM]: "Konata presumida jugando",
        [Locale.PortugueseBR]: "Konata jogando presunçosa",
        [Locale.Turkish]: "Kendini beğenmiş oyun oynayan Konata",
        [Locale.Italian]: "Konata che gioca compiaciuta",
        [Locale.Indonesian]: "Konata bermain game dengan sombong",
        [Locale.Czech]: "Samolibě hrající Konata",
        [Locale.Japanese]: "ドヤ顔でゲームをするこなた",
        [Locale.Korean]: "의기양양하게 게임하는 코나타",
        [Locale.ChineseCN]: "得意打游戏的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 403,
    animationDuration: 250,
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
                src="https://pub-d1f34c49083d4d0e8406a836fafa78f7.r2.dev/meme-templates/lsKonataGamingSmug.gif"
                width={500}
                height={313}
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
