import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const toradoraTaigaChristmasDonut: Template = {
    name: "toradoraTaigaChristmasDonut",
    displayName: buildLocales("Taiga christmas donut", {
        [Locale.Russian]: "Тайга и рождественский пончик",
        [Locale.Ukrainian]: "Тайга і різдвяний пончик",
        [Locale.Dutch]: "Taiga kerstdonut",
        [Locale.French]: "Taiga beignet de Noël",
        [Locale.German]: "Taiga Weihnachts-Donut",
        [Locale.Polish]: "Taiga i świąteczny pączek",
        [Locale.SpanishES]: "Taiga dona de Navidad",
        [Locale.SpanishLATAM]: "Taiga dona de Navidad",
        [Locale.PortugueseBR]: "Taiga rosquinha de Natal",
        [Locale.Turkish]: "Taiga yılbaşı çöreği",
        [Locale.Italian]: "Taiga ciambella di Natale",
        [Locale.Indonesian]: "Taiga donat Natal",
        [Locale.Czech]: "Taiga a vánoční kobliha",
        [Locale.Japanese]: "大河とクリスマスドーナツ",
        [Locale.Korean]: "타이가 크리스마스 도넛",
        [Locale.ChineseCN]: "大河和圣诞甜甜圈",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Toradora],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 534,
    height: 300,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaChristmasDonut.png"
                width={267}
                height={300}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
