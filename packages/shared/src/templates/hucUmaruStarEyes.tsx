import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruStarEyes: Template = {
    name: "hucUmaruStarEyes",
    displayName: buildLocales("Star-eyed Umaru", {
        [Locale.Russian]: "Умару со звездочками в глазах",
        [Locale.Ukrainian]: "Умару із зірочками в очах",
        [Locale.Dutch]: "Umaru met sterrenogen",
        [Locale.French]: "Umaru avec des étoiles dans les yeux",
        [Locale.German]: "Umaru mit Sternenaugen",
        [Locale.Polish]: "Umaru z gwiazdkami w oczach",
        [Locale.SpanishES]: "Umaru con ojos de estrella",
        [Locale.SpanishLATAM]: "Umaru con ojos de estrella",
        [Locale.PortugueseBR]: "Umaru com olhos de estrela",
        [Locale.Turkish]: "Yıldız gözlü Umaru",
        [Locale.Italian]: "Umaru con gli occhi a stella",
        [Locale.Indonesian]: "Umaru dengan mata bintang",
        [Locale.Czech]: "Umaru s hvězdičkami v očích",
        [Locale.Japanese]: "星目のうまる",
        [Locale.Korean]: "별 눈을 한 우마루",
        [Locale.ChineseCN]: "星星眼的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 390,
    animationDuration: 360,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruStarEyes.gif"
                width={540}
                height={300}
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
