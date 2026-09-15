import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruHeadpat1: Template = {
    name: "hucUmaruHeadpat1",
    displayName: buildLocales("Umaru headpat 1", {
        [Locale.Russian]: "Умару гладят по голове 1",
        [Locale.Ukrainian]: "Умару гладять по голові 1",
        [Locale.Dutch]: "Umaru over het hoofd aaien 1",
        [Locale.French]: "Caresse sur la tête d'Umaru 1",
        [Locale.German]: "Umaru Kopfstreichler 1",
        [Locale.Polish]: "Głaskanie Umaru 1",
        [Locale.SpanishES]: "Acariciando la cabeza de Umaru 1",
        [Locale.SpanishLATAM]: "Acariciando la cabeza de Umaru 1",
        [Locale.PortugueseBR]: "Fazendo carinho na Umaru 1",
        [Locale.Turkish]: "Umaru'nun başını okşama 1",
        [Locale.Italian]: "Carezza sulla testa di Umaru 1",
        [Locale.Indonesian]: "Mengelus kepala Umaru 1",
        [Locale.Czech]: "Pohlazení Umaru 1",
        [Locale.Japanese]: "うまるの頭なでなで 1",
        [Locale.Korean]: "우마루 쓰담쓰담 1",
        [Locale.ChineseCN]: "摸摸小埋的头 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground],
    width: 480,
    height: 360,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruHeadpat1.png"
                width={480}
                height={270}
                style={{ position: "absolute", top: 0, left: 0 }}
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
