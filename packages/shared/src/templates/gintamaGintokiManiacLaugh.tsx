import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiManiacLaugh: Template = {
    name: "gintamaGintokiManiacLaugh",
    displayName: buildLocales("Gintoki maniac laugh", {
        [Locale.Russian]: "Маниакальный смех Гинтоки",
        [Locale.Ukrainian]: "Маніакальний сміх Гінтокі",
        [Locale.Dutch]: "Gintoki maniakale lach",
        [Locale.French]: "Rire maniaque de Gintoki",
        [Locale.German]: "Gintokis manisches Lachen",
        [Locale.Polish]: "Maniakalny śmiech Gintokiego",
        [Locale.SpanishES]: "Risa maníaca de Gintoki",
        [Locale.SpanishLATAM]: "Risa maníaca de Gintoki",
        [Locale.PortugueseBR]: "Risada maníaca do Gintoki",
        [Locale.Turkish]: "Gintoki manyak gülüşü",
        [Locale.Italian]: "Risata maniacale di Gintoki",
        [Locale.Indonesian]: "Tawa maniak Gintoki",
        [Locale.Czech]: "Maniakální smích Gintokiho",
        [Locale.Japanese]: "銀時の狂気的な笑い",
        [Locale.Korean]: "긴토키 광기 어린 웃음",
        [Locale.ChineseCN]: "银时狂笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 638,
    height: 522,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiManiacLaugh.png"
                width={638}
                height={412}
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
