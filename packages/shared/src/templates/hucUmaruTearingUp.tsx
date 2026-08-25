import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruTearingUp: Template = {
    name: "hucUmaruTearingUp",
    displayName: buildLocales("Teary-eyed Umaru", {
        [Locale.Russian]: "Умару со слезами на глазах",
        [Locale.Ukrainian]: "Умару зі сльозами на очах",
        [Locale.Dutch]: "Umaru met betraande ogen",
        [Locale.French]: "Umaru au bord des larmes",
        [Locale.German]: "Umaru mit Tränen in den Augen",
        [Locale.Polish]: "Umaru ze łzami w oczach",
        [Locale.SpanishES]: "Umaru con ojos llorosos",
        [Locale.SpanishLATAM]: "Umaru con ojos llorosos",
        [Locale.PortugueseBR]: "Umaru com os olhos marejados",
        [Locale.Turkish]: "Gözleri dolan Umaru",
        [Locale.Italian]: "Umaru con le lacrime agli occhi",
        [Locale.Indonesian]: "Umaru berkaca-kaca",
        [Locale.Czech]: "Umaru se slzami v očích",
        [Locale.Japanese]: "涙ぐむうまる",
        [Locale.Korean]: "울먹이는 우마루",
        [Locale.ChineseCN]: "眼泪汪汪的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 451,
    animationDuration: 2000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruTearingUp.gif"
                width={540}
                height={361}
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
                        fontFamily: font,
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
