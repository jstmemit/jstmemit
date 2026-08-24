import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruHeadpat: Template = {
    name: "hucUmaruHeadpat",
    displayName: buildLocales("Umaru headpat", {
        [Locale.Russian]: "Умару гладят по голове",
        [Locale.Ukrainian]: "Умару гладять по голові",
        [Locale.Dutch]: "Umaru over het hoofd aaien",
        [Locale.French]: "Caresse sur la tête d'Umaru",
        [Locale.German]: "Umaru Kopfstreichler",
        [Locale.Polish]: "Głaskanie Umaru",
        [Locale.SpanishES]: "Acariciando la cabeza de Umaru",
        [Locale.SpanishLATAM]: "Acariciando la cabeza de Umaru",
        [Locale.PortugueseBR]: "Fazendo carinho na Umaru",
        [Locale.Turkish]: "Umaru'nun başını okşama",
        [Locale.Italian]: "Carezza sulla testa di Umaru",
        [Locale.Indonesian]: "Mengelus kepala Umaru",
        [Locale.Czech]: "Pohlazení Umaru",
        [Locale.Japanese]: "うまるの頭なでなで",
        [Locale.Korean]: "우마루 쓰담쓰담",
        [Locale.ChineseCN]: "摸摸小埋的头",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 1820,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruHeadpat.gif"
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
                        fontSize: 30,
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
