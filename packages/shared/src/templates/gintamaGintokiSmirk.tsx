import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiSmirk: Template = {
    name: "gintamaGintokiSmirk",
    displayName: buildLocales("Gintoki smirk", {
        [Locale.Russian]: "Ухмылка Гинтоки",
        [Locale.Ukrainian]: "Усмішка Гінтокі",
        [Locale.Dutch]: "Gintoki grijns",
        [Locale.French]: "Sourire en coin de Gintoki",
        [Locale.German]: "Gintokis Grinsen",
        [Locale.Polish]: "Uśmieszek Gintokiego",
        [Locale.SpanishES]: "Sonrisa petulante de Gintoki",
        [Locale.SpanishLATAM]: "Sonrisa petulante de Gintoki",
        [Locale.PortugueseBR]: "Sorrisinho do Gintoki",
        [Locale.Turkish]: "Gintoki sırıtışı",
        [Locale.Italian]: "Sorrisetto di Gintoki",
        [Locale.Indonesian]: "Seringai Gintoki",
        [Locale.Czech]: "Úšklebek Gintokiho",
        [Locale.Japanese]: "銀時のニヤリ顔",
        [Locale.Korean]: "긴토키 썩소",
        [Locale.ChineseCN]: "银时坏笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottom],
    width: 736,
    height: 736,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiSmirk.png"
                width={736}
                height={736}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
