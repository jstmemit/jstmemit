import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataWaitingForRamen: Template = {
    name: "lsKonataWaitingForRamen",
    displayName: buildLocales("Konata waiting for ramen", {
        [Locale.Russian]: "Коната ждет рамен",
        [Locale.Ukrainian]: "Коната чекає на рамен",
        [Locale.Dutch]: "Konata wacht op ramen",
        [Locale.French]: "Konata attendant ses ramen",
        [Locale.German]: "Konata wartet auf Ramen",
        [Locale.Polish]: "Konata czekająca na ramen",
        [Locale.SpanishES]: "Konata esperando ramen",
        [Locale.SpanishLATAM]: "Konata esperando ramen",
        [Locale.PortugueseBR]: "Konata esperando ramen",
        [Locale.Turkish]: "Ramen bekleyen Konata",
        [Locale.Italian]: "Konata che aspetta il ramen",
        [Locale.Indonesian]: "Konata menunggu ramen",
        [Locale.Czech]: "Konata čekající na ramen",
        [Locale.Japanese]: "ラーメンを待つこなた",
        [Locale.Korean]: "라멘을 기다리는 코나타",
        [Locale.ChineseCN]: "等待拉面的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 1500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataWaitingForRamen.gif"
                width={500}
                height={270}
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
