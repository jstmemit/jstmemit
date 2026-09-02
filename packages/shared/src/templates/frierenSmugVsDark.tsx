import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenSmugVsDark: Template = {
    name: "frierenSmugVsDark",
    displayName: buildLocales("Frieren smug vs dark", {
        [Locale.Russian]: "Довольная Фрирен против мрачной",
        [Locale.Ukrainian]: "Задоволена Фрірен проти похмурої",
        [Locale.Dutch]: "Frieren zelfingenomen vs donker",
        [Locale.French]: "Frieren suffisante vs sombre",
        [Locale.German]: "Frieren selbstgefällig vs düster",
        [Locale.Polish]: "Zadowolona Frieren vs mroczna",
        [Locale.SpanishES]: "Frieren engreída vs oscura",
        [Locale.SpanishLATAM]: "Frieren engreída vs oscura",
        [Locale.PortugueseBR]: "Frieren presunçosa vs sombria",
        [Locale.Turkish]: "Ukala Frieren vs karanlık Frieren",
        [Locale.Italian]: "Frieren compiaciuta vs oscura",
        [Locale.Indonesian]: "Frieren sombong vs gelap",
        [Locale.Czech]: "Spokojená Frieren vs temná",
        [Locale.Japanese]: "ドヤ顔のフリーレン vs 闇落ち",
        [Locale.Korean]: "거만한 프리렌 vs 다크 프리렌",
        [Locale.ChineseCN]: "得意的芙莉莲对比黑化",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TwoOption, Type.TextLeftWithBackground],
    width: 658,
    height: 493,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 10 },
        { id: 1, description: "second option", minLength: 1, maxLength: 10 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenSmugVsDark.png"
                width={329}
                height={493}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "53%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "4px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "47%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "1px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
