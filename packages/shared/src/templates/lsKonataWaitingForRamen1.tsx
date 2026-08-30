import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataWaitingForRamen1: Template = {
    name: "lsKonataWaitingForRamen1",
    displayName: buildLocales("Konata waiting for ramen 1", {
        [Locale.Russian]: "Коната ждет рамен 1",
        [Locale.Ukrainian]: "Коната чекає на рамен 1",
        [Locale.Dutch]: "Konata wacht op ramen 1",
        [Locale.French]: "Konata attendant ses ramen 1",
        [Locale.German]: "Konata wartet auf Ramen 1",
        [Locale.Polish]: "Konata czekająca na ramen 1",
        [Locale.SpanishES]: "Konata esperando ramen 1",
        [Locale.SpanishLATAM]: "Konata esperando ramen 1",
        [Locale.PortugueseBR]: "Konata esperando ramen 1",
        [Locale.Turkish]: "Ramen bekleyen Konata 1",
        [Locale.Italian]: "Konata che aspetta il ramen 1",
        [Locale.Indonesian]: "Konata menunggu ramen 1",
        [Locale.Czech]: "Konata čekající na ramen 1",
        [Locale.Japanese]: "ラーメンを待つこなた 1",
        [Locale.Korean]: "라멘을 기다리는 코나타 1",
        [Locale.ChineseCN]: "等待拉面的此方 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.FaceImage, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 1500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Konata`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataWaitingForRamen.gif"
                width={500}
                height={270}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={170}
                height={170}
                style={{
                    position: "absolute",
                    top: 70,
                    right: 105,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
