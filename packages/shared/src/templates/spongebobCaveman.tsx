import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobCaveman: Template = {
    name: "spongebobCaveman",
    displayName: buildLocales("Spongebob caveman", {
        [Locale.Russian]: "Пещерный Губка Боб",
        [Locale.Ukrainian]: "Печерний Губка Боб",
        [Locale.Dutch]: "Spongebob holbewoner",
        [Locale.French]: "Bob l'éponge homme des cavernes",
        [Locale.German]: "Spongebob Höhlenmensch",
        [Locale.Polish]: "SpongeBob jaskiniowiec",
        [Locale.SpanishES]: "Bob Esponja cavernícola",
        [Locale.SpanishLATAM]: "Bob Esponja cavernícola",
        [Locale.PortugueseBR]: "Bob Esponja homem das cavernas",
        [Locale.Turkish]: "Mağara adamı SüngerBob",
        [Locale.Italian]: "SpongeBob cavernicolo",
        [Locale.Indonesian]: "Spongebob manusia purba",
        [Locale.Czech]: "Pravěký Spongebob",
        [Locale.Japanese]: "原始人スポンジ・ボブ",
        [Locale.Korean]: "원시인 스폰지밥",
        [Locale.ChineseCN]: "原始人海绵宝宝",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTop],
    width: 716,
    height: 552,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobCaveman.jpg"
                width={716}
                height={452}
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
