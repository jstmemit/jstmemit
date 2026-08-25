import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaIntenseBlush: Template = {
    name: "kaguyasamaKaguyaIntenseBlush",
    displayName: buildLocales("Intensely blushing Kaguya", {
        [Locale.Russian]: "Сильно краснеющая Кагуя",
        [Locale.Ukrainian]: "Сильно почервоніла Каґуя",
        [Locale.Dutch]: "Hevig blozende Kaguya",
        [Locale.French]: "Kaguya rougissant intensément",
        [Locale.German]: "Stark errötende Kaguya",
        [Locale.Polish]: "Mocno zarumieniona Kaguya",
        [Locale.SpanishES]: "Kaguya muy sonrojada",
        [Locale.SpanishLATAM]: "Kaguya muy sonrojada",
        [Locale.PortugueseBR]: "Kaguya muito corada",
        [Locale.Turkish]: "Çok kızaran Kaguya",
        [Locale.Italian]: "Kaguya molto arrossita",
        [Locale.Indonesian]: "Kaguya tersipu hebat",
        [Locale.Czech]: "Silně se červenající Kaguya",
        [Locale.Japanese]: "真っ赤になるかぐや",
        [Locale.Korean]: "얼굴이 새빨개진 카구야",
        [Locale.ChineseCN]: "满脸通红的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 3200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaIntenseBlush.gif"
                width={540}
                height={304}
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
