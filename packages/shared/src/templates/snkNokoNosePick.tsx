import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const snkNokoNosePick: Template = {
    name: "snkNokoNosePick",
    displayName: buildLocales("Noko picking nose", {
        [Locale.Russian]: "Ноко ковыряет в носу",
        [Locale.Ukrainian]: "Ноко копирсається в носі",
        [Locale.Dutch]: "Noko peutert in haar neus",
        [Locale.French]: "Noko se cure le nez",
        [Locale.German]: "Noko bohrt in der Nase",
        [Locale.Polish]: "Noko dłubiąca w nosie",
        [Locale.SpanishES]: "Noko hurgándose la nariz",
        [Locale.SpanishLATAM]: "Noko hurgándose la nariz",
        [Locale.PortugueseBR]: "Noko cutucando o nariz",
        [Locale.Turkish]: "Burnunu karıştıran Noko",
        [Locale.Italian]: "Noko che si scava il naso",
        [Locale.Indonesian]: "Noko mengupil",
        [Locale.Czech]: "Noko šťourající se v nose",
        [Locale.Japanese]: "鼻をほじるのこ",
        [Locale.Korean]: "코 파는 노코",
        [Locale.ChineseCN]: "抠鼻子的鹿乃子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ShikanokoNokonokoKoshitantan],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 680,
    height: 498,
    animationDuration: 1010,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 16 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/snkNokoNosePick.gif"
                width={340}
                height={498}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 10,
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
