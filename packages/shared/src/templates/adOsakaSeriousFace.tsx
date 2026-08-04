import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adOsakaSeriousFace: Template = {
    name: "adOsakaSeriousFace",
    displayName: buildLocales("Osaka serious face", {
        [Locale.Russian]: "Серьезное лицо Осаки",
        [Locale.Ukrainian]: "Серйозне обличчя Осаки",
        [Locale.Dutch]: "Osaka serieus gezicht",
        [Locale.French]: "Visage sérieux d'Osaka",
        [Locale.German]: "Osakas ernstes Gesicht",
        [Locale.Polish]: "Poważna twarz Osaki",
        [Locale.SpanishES]: "Cara seria de Osaka",
        [Locale.SpanishLATAM]: "Cara seria de Osaka",
        [Locale.PortugueseBR]: "Rosto sério da Osaka",
        [Locale.Turkish]: "Osaka ciddi yüzü",
        [Locale.Italian]: "Faccia seria di Osaka",
        [Locale.Indonesian]: "Wajah serius Osaka",
        [Locale.Czech]: "Vážný obličej Osaky",
        [Locale.Japanese]: "大阪 真顔",
        [Locale.Korean]: "오사카 진지한 얼굴",
        [Locale.ChineseCN]: "大阪严肃脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom],
    width: 500,
    height: 500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,fit=scale-up,width=500,upscale=generate,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adOsakaSeriousFace.png"
                width={500}
                height={500}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                        fontSize: 30,
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
