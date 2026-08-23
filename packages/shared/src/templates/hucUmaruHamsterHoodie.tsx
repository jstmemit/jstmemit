import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruHamsterHoodie: Template = {
    name: "hucUmaruHamsterHoodie",
    displayName: buildLocales("Umaru hamster hoodie", {
        [Locale.Russian]: "Умару в худи хомяка",
        [Locale.Ukrainian]: "Умару в худі хом'яка",
        [Locale.Dutch]: "Umaru hamster hoodie",
        [Locale.French]: "Umaru avec un sweat hamster",
        [Locale.German]: "Umaru Hamster-Hoodie",
        [Locale.Polish]: "Umaru w bluzie chomika",
        [Locale.SpanishES]: "Umaru con sudadera de hámster",
        [Locale.SpanishLATAM]: "Umaru con sudadera de hámster",
        [Locale.PortugueseBR]: "Umaru com capuz de hamster",
        [Locale.Turkish]: "Hamster kapşonlu Umaru",
        [Locale.Italian]: "Umaru con felpa da criceto",
        [Locale.Indonesian]: "Umaru hoodie hamster",
        [Locale.Czech]: "Umaru v křeččí mikině",
        [Locale.Japanese]: "ハムスターパーカーのうまる",
        [Locale.Korean]: "햄스터 후드티 우마루",
        [Locale.ChineseCN]: "仓鼠卫衣小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 736,
    height: 834,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruHamsterHoodie.png"
                width={736}
                height={724}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                        fontFamily: "Comic Sans MS",
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
