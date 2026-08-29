import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruCoolSunglasses: Template = {
    name: "hucUmaruCoolSunglasses",
    displayName: buildLocales("Umaru in cool sunglasses", {
        [Locale.Russian]: "Умару в крутых очках",
        [Locale.Ukrainian]: "Умару в крутих окулярах",
        [Locale.Dutch]: "Umaru met coole zonnebril",
        [Locale.French]: "Umaru avec des lunettes de soleil cool",
        [Locale.German]: "Umaru mit cooler Sonnenbrille",
        [Locale.Polish]: "Umaru w fajnych okularach",
        [Locale.SpanishES]: "Umaru con gafas de sol geniales",
        [Locale.SpanishLATAM]: "Umaru con lentes de sol geniales",
        [Locale.PortugueseBR]: "Umaru de óculos escuros legais",
        [Locale.Turkish]: "Havalı güneş gözlüklü Umaru",
        [Locale.Italian]: "Umaru con occhiali da sole fighi",
        [Locale.Indonesian]: "Umaru dengan kacamata hitam keren",
        [Locale.Czech]: "Umaru s cool slunečními brýlemi",
        [Locale.Japanese]: "クールなサングラスのうまる",
        [Locale.Korean]: "멋진 선글라스를 낀 우마루",
        [Locale.ChineseCN]: "戴酷炫墨镜的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruCoolSunglasses.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
