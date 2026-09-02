import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqNinoMenacingSmile: Template = {
    name: "tqqNinoMenacingSmile",
    displayName: buildLocales("Nino menacing smile", {
        [Locale.Russian]: "Угрожающе улыбающаяся Нино",
        [Locale.Ukrainian]: "Погрозливо усміхнена Ніно",
        [Locale.Dutch]: "Dreigend glimlachende Nino",
        [Locale.French]: "Nino au sourire menaçant",
        [Locale.German]: "Bedrohlich lächelnde Nino",
        [Locale.Polish]: "Groźnie uśmiechnięta Nino",
        [Locale.SpanishES]: "Nino con sonrisa amenazante",
        [Locale.SpanishLATAM]: "Nino con sonrisa amenazante",
        [Locale.PortugueseBR]: "Nino com sorriso ameaçador",
        [Locale.Turkish]: "Tehditkar gülümseyen Nino",
        [Locale.Italian]: "Nino con un sorriso minaccioso",
        [Locale.Indonesian]: "Nino tersenyum mengancam",
        [Locale.Czech]: "Hrozivě se usmívající Nino",
        [Locale.Japanese]: "不敵に微笑む二乃",
        [Locale.Korean]: "위협적으로 미소 짓는 니노",
        [Locale.ChineseCN]: "带着威胁笑容的二乃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 490,
    animationDuration: 2480,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqNinoMenacingSmile.gif"
                width={640}
                height={360}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
