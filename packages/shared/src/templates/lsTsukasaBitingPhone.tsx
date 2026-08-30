import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsTsukasaBitingPhone: Template = {
    name: "lsTsukasaBitingPhone",
    displayName: buildLocales("Tsukasa biting phone", {
        [Locale.Russian]: "Цукаса кусает телефон",
        [Locale.Ukrainian]: "Цукаса кусає телефон",
        [Locale.Dutch]: "Tsukasa bijt in telefoon",
        [Locale.French]: "Tsukasa mordant son téléphone",
        [Locale.German]: "Tsukasa beißt ins Telefon",
        [Locale.Polish]: "Tsukasa gryząca telefon",
        [Locale.SpanishES]: "Tsukasa mordiendo el teléfono",
        [Locale.SpanishLATAM]: "Tsukasa mordiendo el teléfono",
        [Locale.PortugueseBR]: "Tsukasa mordendo o telefone",
        [Locale.Turkish]: "Telefonu ısıran Tsukasa",
        [Locale.Italian]: "Tsukasa che morde il telefono",
        [Locale.Indonesian]: "Tsukasa menggigit telepon",
        [Locale.Czech]: "Tsukasa kousající do telefonu",
        [Locale.Japanese]: "携帯を噛むつかさ",
        [Locale.Korean]: "전화를 깨무는 츠카사",
        [Locale.ChineseCN]: "咬手机的司",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 400,
    height: 380,
    animationDuration: 4100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsTsukasaBitingPhone.gif"
                width={400}
                height={300}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "80px",
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
