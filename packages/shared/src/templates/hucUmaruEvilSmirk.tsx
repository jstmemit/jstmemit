import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruEvilSmirk: Template = {
    name: "hucUmaruEvilSmirk",
    displayName: buildLocales("Umaru's evil smirk", {
        [Locale.Russian]: "Зловещая ухмылка Умару",
        [Locale.Ukrainian]: "Зловісна усмішка Умару",
        [Locale.Dutch]: "Umarus gemene grijns",
        [Locale.French]: "Sourire maléfique d'Umaru",
        [Locale.German]: "Umarus böses Grinsen",
        [Locale.Polish]: "Złowieszczy uśmieszek Umaru",
        [Locale.SpanishES]: "Umaru con sonrisa maliciosa",
        [Locale.SpanishLATAM]: "Umaru con sonrisa maliciosa",
        [Locale.PortugueseBR]: "Sorriso malicioso da Umaru",
        [Locale.Turkish]: "Umaru'nun şeytani sırıtışı",
        [Locale.Italian]: "Umaru con ghigno malefico",
        [Locale.Indonesian]: "Seringai jahat Umaru",
        [Locale.Czech]: "Umaru se zlomyslným úšklebkem",
        [Locale.Japanese]: "邪悪な笑みのうまる",
        [Locale.Korean]: "사악하게 웃는 우마루",
        [Locale.ChineseCN]: "坏笑的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 377,
    animationDuration: 4080,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruEvilSmirk.gif"
                width={500}
                height={287}
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
