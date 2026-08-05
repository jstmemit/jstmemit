import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiSurprisedFace: Template = {
    name: "gintamaGintokiSurprisedFace",
    displayName: buildLocales("Gintoki surprised face", {
        [Locale.Russian]: "Удивленное лицо Гинтоки",
        [Locale.Ukrainian]: "Здивоване обличчя Гінтокі",
        [Locale.Dutch]: "Gintoki verrast gezicht",
        [Locale.French]: "Visage surpris de Gintoki",
        [Locale.German]: "Gintokis überraschtes Gesicht",
        [Locale.Polish]: "Zaskoczona twarz Gintokiego",
        [Locale.SpanishES]: "Cara de sorpresa de Gintoki",
        [Locale.SpanishLATAM]: "Cara de sorpresa de Gintoki",
        [Locale.PortugueseBR]: "Rosto surpreso do Gintoki",
        [Locale.Turkish]: "Gintoki şaşkın yüz",
        [Locale.Italian]: "Faccia sorpresa di Gintoki",
        [Locale.Indonesian]: "Wajah terkejut Gintoki",
        [Locale.Czech]: "Překvapený obličej Gintokiho",
        [Locale.Japanese]: "驚く銀時の顔",
        [Locale.Korean]: "긴토키 놀란 표정",
        [Locale.ChineseCN]: "银时惊讶脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottom],
    width: 704,
    height: 704,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiSurprisedFace.png"
                width={704}
                height={704}
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
                        fontSize: 45,
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
