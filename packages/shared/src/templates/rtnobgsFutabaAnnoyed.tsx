import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsFutabaAnnoyed: Template = {
    name: "rtnobgsFutabaAnnoyed",
    displayName: buildLocales("Futaba annoyed", {
        [Locale.Russian]: "Раздраженная Футаба",
        [Locale.Ukrainian]: "Роздратована Футаба",
        [Locale.Dutch]: "Geërgerde Futaba",
        [Locale.French]: "Futaba agacée",
        [Locale.German]: "Genervte Futaba",
        [Locale.Polish]: "Zirytowana Futaba",
        [Locale.SpanishES]: "Futaba molesta",
        [Locale.SpanishLATAM]: "Futaba molesta",
        [Locale.PortugueseBR]: "Futaba irritada",
        [Locale.Turkish]: "Sinirlenmiş Futaba",
        [Locale.Italian]: "Futaba infastidita",
        [Locale.Indonesian]: "Futaba kesal",
        [Locale.Czech]: "Otrávená Futaba",
        [Locale.Japanese]: "イライラする双葉",
        [Locale.Korean]: "짜증난 후타바",
        [Locale.ChineseCN]: "烦躁的双叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 600,
    height: 400,
    animationDuration: 1350,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 14 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsFutabaAnnoyed.gif"
                width={300}
                height={400}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 9,
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
