import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiScaredGhost: Template = {
    name: "gintamaGintokiScaredGhost",
    displayName: buildLocales("Gintoki scared ghost", {
        [Locale.Russian]: "Гинтоки испугался призрака",
        [Locale.Ukrainian]: "Гінтокі злякався привида",
        [Locale.Dutch]: "Gintoki bang voor spook",
        [Locale.French]: "Gintoki a peur du fantôme",
        [Locale.German]: "Gintoki Angst vor Geist",
        [Locale.Polish]: "Gintoki przerażony duchem",
        [Locale.SpanishES]: "Gintoki asustado de un fantasma",
        [Locale.SpanishLATAM]: "Gintoki asustado de un fantasma",
        [Locale.PortugueseBR]: "Gintoki com medo de fantasma",
        [Locale.Turkish]: "Gintoki hayaletten korkuyor",
        [Locale.Italian]: "Gintoki spaventato dal fantasma",
        [Locale.Indonesian]: "Gintoki takut hantu",
        [Locale.Czech]: "Gintoki vystrašený duchem",
        [Locale.Japanese]: "幽霊に怯える銀時",
        [Locale.Korean]: "귀신 보고 놀란 긴토키",
        [Locale.ChineseCN]: "银时怕鬼",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 470,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiScaredGhost.png"
                width={640}
                height={360}
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
                        fontSize: fontSize(texts[0]),
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
