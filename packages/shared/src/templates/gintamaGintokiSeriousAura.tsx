import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiSeriousAura: Template = {
    name: "gintamaGintokiSeriousAura",
    displayName: buildLocales("Serious aura Gintoki", {
        [Locale.Russian]: "Гинтоки с серьезной аурой",
        [Locale.Ukrainian]: "Гінтокі з серйозною аурою",
        [Locale.Dutch]: "Gintoki met serieuze aura",
        [Locale.French]: "Aura sérieuse de Gintoki",
        [Locale.German]: "Gintoki mit ernster Aura",
        [Locale.Polish]: "Gintoki z poważną aurą",
        [Locale.SpanishES]: "Gintoki con aura seria",
        [Locale.SpanishLATAM]: "Gintoki con aura seria",
        [Locale.PortugueseBR]: "Gintoki com aura séria",
        [Locale.Turkish]: "Ciddi auralı Gintoki",
        [Locale.Italian]: "Gintoki con aura seria",
        [Locale.Indonesian]: "Aura serius Gintoki",
        [Locale.Czech]: "Gintoki s vážnou aurou",
        [Locale.Japanese]: "シリアスなオーラの銀時",
        [Locale.Korean]: "진지한 오라의 긴토키",
        [Locale.ChineseCN]: "散发严肃气场的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 630,
    height: 448,
    animationDuration: 1920,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiSeriousAura.webp"
                width={630}
                height={358}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
