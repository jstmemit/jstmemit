import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenSmugPotion: Template = {
    name: "frierenSmugPotion",
    displayName: buildLocales("Frieren smug potion", {
        [Locale.Russian]: "Довольная Фрирен с зельем",
        [Locale.Ukrainian]: "Задоволена Фрірен із зіллям",
        [Locale.Dutch]: "Frieren met zelfingenomen drankje",
        [Locale.French]: "Frieren suffisante avec une potion",
        [Locale.German]: "Frieren selbstgefällig mit Trank",
        [Locale.Polish]: "Zadowolona Frieren z eliksirem",
        [Locale.SpanishES]: "Frieren engreída con poción",
        [Locale.SpanishLATAM]: "Frieren engreída con poción",
        [Locale.PortugueseBR]: "Frieren presunçosa com poção",
        [Locale.Turkish]: "İksirli ukala Frieren",
        [Locale.Italian]: "Frieren compiaciuta con pozione",
        [Locale.Indonesian]: "Frieren sombong bawa ramuan",
        [Locale.Czech]: "Spokojená Frieren s lektvarem",
        [Locale.Japanese]: "ポーションを持ってドヤ顔のフリーレン",
        [Locale.Korean]: "포션 들고 썩소 짓는 프리렌",
        [Locale.ChineseCN]: "拿魔药得意的芙莉莲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextTopWithBackground, Type.ObjectImage],
    width: 739,
    height: 525,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "potion" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenSmugPotion.png"
                width={739}
                height={415}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    bottom: 155,
                    left: 190,
                    borderRadius: "100%",
                    objectFit: "cover",
                    filter: "sepia(1) hue-rotate(220deg) saturate(1.4) brightness(0.7) contrast(1.1)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
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
