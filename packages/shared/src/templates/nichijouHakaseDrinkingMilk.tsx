import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouHakaseDrinkingMilk: Template = {
    name: "nichijouHakaseDrinkingMilk",
    displayName: buildLocales("Hakase drinking milk", {
        [Locale.Russian]: "Хакасэ пьет молоко",
        [Locale.Ukrainian]: "Хакасе п'є молоко",
        [Locale.Dutch]: "Hakase drinkt melk",
        [Locale.French]: "Hakase buvant du lait",
        [Locale.German]: "Hakase trinkt Milch",
        [Locale.Polish]: "Hakase pijąca mleko",
        [Locale.SpanishES]: "Hakase bebiendo leche",
        [Locale.SpanishLATAM]: "Hakase bebiendo leche",
        [Locale.PortugueseBR]: "Hakase bebendo leite",
        [Locale.Turkish]: "Süt içen Hakase",
        [Locale.Italian]: "Hakase che beve il latte",
        [Locale.Indonesian]: "Hakase minum susu",
        [Locale.Czech]: "Hakase pijící mléko",
        [Locale.Japanese]: "牛乳を飲むはかせ",
        [Locale.Korean]: "우유를 마시는 하카세",
        [Locale.ChineseCN]: "喝牛奶的博士",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 1360,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouHakaseDrinkingMilk.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
