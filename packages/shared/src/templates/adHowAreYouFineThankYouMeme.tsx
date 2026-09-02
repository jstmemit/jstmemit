import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adHowAreYouFineThankYouMeme: Template = {
    name: "adHowAreYouFineThankYouMeme",
    displayName: buildLocales("How are you fine thank you meme", {
        [Locale.Russian]: "Мем How are you fine thank you",
        [Locale.Ukrainian]: "Мем How are you fine thank you",
        [Locale.Dutch]: "How are you fine thank you meme",
        [Locale.French]: "Mème How are you fine thank you",
        [Locale.German]: "How are you fine thank you Meme",
        [Locale.Polish]: "Mem How are you fine thank you",
        [Locale.SpanishES]: "Meme de How are you fine thank you",
        [Locale.SpanishLATAM]: "Meme de How are you fine thank you",
        [Locale.PortugueseBR]: "Meme How are you fine thank you",
        [Locale.Turkish]: "How are you fine thank you capsi",
        [Locale.Italian]: "Meme How are you fine thank you",
        [Locale.Indonesian]: "Meme How are you fine thank you",
        [Locale.Czech]: "How are you fine thank you meme",
        [Locale.Japanese]: "How are you fine thank you ミーム",
        [Locale.Korean]: "How are you fine thank you 밈",
        [Locale.ChineseCN]: "How are you fine thank you 梗图",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.DefaultText],
    width: 480,
    height: 460,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adHowAreYouFineThankYouMeme.png"
                width={480}
                height={360}
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
