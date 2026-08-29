import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruAngryPout: Template = {
    name: "hucUmaruAngryPout",
    displayName: buildLocales("Angry pouting Umaru", {
        [Locale.Russian]: "Злая дующаяся Умару",
        [Locale.Ukrainian]: "Зла надута Умару",
        [Locale.Dutch]: "Boze pruilende Umaru",
        [Locale.French]: "Umaru en colère qui boude",
        [Locale.German]: "Wütend schmollende Umaru",
        [Locale.Polish]: "Zła nadąsana Umaru",
        [Locale.SpanishES]: "Umaru enfadada haciendo puchero",
        [Locale.SpanishLATAM]: "Umaru enojada haciendo puchero",
        [Locale.PortugueseBR]: "Umaru com raiva fazendo bico",
        [Locale.Turkish]: "Kızgın dudak büken Umaru",
        [Locale.Italian]: "Umaru arrabbiata che mette il broncio",
        [Locale.Indonesian]: "Umaru marah sambil cemberut",
        [Locale.Czech]: "Naštvaná trucující Umaru",
        [Locale.Japanese]: "怒ってふくれっ面のうまる",
        [Locale.Korean]: "화나서 뾰로통한 우마루",
        [Locale.ChineseCN]: "生气嘟嘴的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruAngryPout.gif"
                width={540}
                height={304}
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
