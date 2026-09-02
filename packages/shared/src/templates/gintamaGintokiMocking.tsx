import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiMocking: Template = {
    name: "gintamaGintokiMocking",
    displayName: buildLocales("Mocking Gintoki", {
        [Locale.Russian]: "Насмехающийся Гинтоки",
        [Locale.Ukrainian]: "Гінтокі глузує",
        [Locale.Dutch]: "Spottende Gintoki",
        [Locale.French]: "Gintoki moqueur",
        [Locale.German]: "Spottender Gintoki",
        [Locale.Polish]: "Kpiący Gintoki",
        [Locale.SpanishES]: "Gintoki burlón",
        [Locale.SpanishLATAM]: "Gintoki burlón",
        [Locale.PortugueseBR]: "Gintoki zombando",
        [Locale.Turkish]: "Alaycı Gintoki",
        [Locale.Italian]: "Gintoki beffardo",
        [Locale.Indonesian]: "Gintoki mengejek",
        [Locale.Czech]: "Posmívající se Gintoki",
        [Locale.Japanese]: "煽る銀時",
        [Locale.Korean]: "비웃는 긴토키",
        [Locale.ChineseCN]: "嘲讽的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 3120,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiMocking.gif"
                width={500}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
