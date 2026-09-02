import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const snkNokotanEmptyHead: Template = {
    name: "snkNokotanEmptyHead",
    displayName: buildLocales("Nokotan empty head", {
        [Locale.Russian]: "Пустая голова Нокотан",
        [Locale.Ukrainian]: "Порожня голова Нокотан",
        [Locale.Dutch]: "Nokotan met een leeg hoofd",
        [Locale.French]: "Tête vide de Nokotan",
        [Locale.German]: "Nokotans leerer Kopf",
        [Locale.Polish]: "Pusta głowa Nokotan",
        [Locale.SpanishES]: "Cabeza vacía de Nokotan",
        [Locale.SpanishLATAM]: "Cabeza vacía de Nokotan",
        [Locale.PortugueseBR]: "Cabeça vazia de Nokotan",
        [Locale.Turkish]: "Boş kafalı Nokotan",
        [Locale.Italian]: "Testa vuota di Nokotan",
        [Locale.Indonesian]: "Kepala kosong Nokotan",
        [Locale.Czech]: "Prázdná hlava Nokotan",
        [Locale.Japanese]: "頭からっぽののこたん",
        [Locale.Korean]: "머리가 텅 빈 노코탄",
        [Locale.ChineseCN]: "大脑空空的鹿乃子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ShikanokoNokonokoKoshitantan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 371,
    animationDuration: 4110,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/snkNokotanEmptyHead.gif"
                width={498}
                height={281}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
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
