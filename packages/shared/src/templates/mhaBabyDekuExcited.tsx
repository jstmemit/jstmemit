import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaBabyDekuExcited: Template = {
    name: "mhaBabyDekuExcited",
    displayName: buildLocales("Baby Deku excited", {
        [Locale.Russian]: "Радостный малыш Деку",
        [Locale.Ukrainian]: "Радісний малюк Деку",
        [Locale.Dutch]: "Opgewonden baby Deku",
        [Locale.French]: "Bébé Deku excité",
        [Locale.German]: "Aufgeregter Baby-Deku",
        [Locale.Polish]: "Podekscytowany mały Deku",
        [Locale.SpanishES]: "Bebé Deku emocionado",
        [Locale.SpanishLATAM]: "Bebé Deku emocionado",
        [Locale.PortugueseBR]: "Bebê Deku animado",
        [Locale.Turkish]: "Heyecanlı bebek Deku",
        [Locale.Italian]: "Baby Deku emozionato",
        [Locale.Indonesian]: "Bayi Deku bersemangat",
        [Locale.Czech]: "Nadšený malý Deku",
        [Locale.Japanese]: "興奮するベビーデク",
        [Locale.Korean]: "신난 아기 데쿠",
        [Locale.ChineseCN]: "兴奋的小出久",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 360,
    animationDuration: 2300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaBabyDekuExcited.gif"
                width={500}
                height={260}
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
