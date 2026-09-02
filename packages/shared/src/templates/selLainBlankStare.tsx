import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainBlankStare: Template = {
    name: "selLainBlankStare",
    displayName: buildLocales("Lain blank stare", {
        [Locale.Russian]: "Пустой взгляд Лэйн",
        [Locale.Ukrainian]: "Порожній погляд Лейн",
        [Locale.Dutch]: "Lege blik van Lain",
        [Locale.French]: "Regard vide de Lain",
        [Locale.German]: "Lains leerer Blick",
        [Locale.Polish]: "Puste spojrzenie Lain",
        [Locale.SpanishES]: "Mirada vacía de Lain",
        [Locale.SpanishLATAM]: "Mirada vacía de Lain",
        [Locale.PortugueseBR]: "Olhar vazio de Lain",
        [Locale.Turkish]: "Lain'in boş bakışı",
        [Locale.Italian]: "Sguardo vuoto di Lain",
        [Locale.Indonesian]: "Tatapan kosong Lain",
        [Locale.Czech]: "Lainin prázdný pohled",
        [Locale.Japanese]: "玲音の虚ろな目",
        [Locale.Korean]: "레인의 멍한 시선",
        [Locale.ChineseCN]: "玲音空洞的眼神",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 474,
    animationDuration: 2770,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/selLainBlankStare.gif"
                width={500}
                height={374}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
