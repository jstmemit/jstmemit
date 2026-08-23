import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiDarkFace: Template = {
    name: "gintamaGintokiDarkFace",
    displayName: buildLocales("Gintoki dark face", {
        [Locale.Russian]: "Мрачное лицо Гинтоки",
        [Locale.Ukrainian]: "Похмуре обличчя Гінтокі",
        [Locale.Dutch]: "Gintoki donker gezicht",
        [Locale.French]: "Visage sombre de Gintoki",
        [Locale.German]: "Gintokis finsteres Gesicht",
        [Locale.Polish]: "Mroczna twarz Gintokiego",
        [Locale.SpanishES]: "Cara oscura de Gintoki",
        [Locale.SpanishLATAM]: "Cara oscura de Gintoki",
        [Locale.PortugueseBR]: "Rosto sombrio do Gintoki",
        [Locale.Turkish]: "Gintoki karanlık yüz",
        [Locale.Italian]: "Faccia scura di Gintoki",
        [Locale.Indonesian]: "Wajah gelap Gintoki",
        [Locale.Czech]: "Temný obličej Gintokiho",
        [Locale.Japanese]: "銀時の闇落ち顔",
        [Locale.Korean]: "긴토키 어두운 표정",
        [Locale.ChineseCN]: "银时黑化脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 736,
    height: 524,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiDarkFace.png"
                width={736}
                height={414}
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
