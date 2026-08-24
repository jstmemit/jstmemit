import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const wnlMafuyuKirisuMenacing: Template = {
    name: "wnlMafuyuKirisuMenacing",
    displayName: buildLocales("Mafuyu Kirisu menacing", {
        [Locale.Russian]: "Угрожающая Мафую Кирису",
        [Locale.Ukrainian]: "Загрозлива Мафую Кірісу",
        [Locale.Dutch]: "Mafuyu Kirisu dreigend",
        [Locale.French]: "Mafuyu Kirisu menaçante",
        [Locale.German]: "Mafuyu Kirisu bedrohlich",
        [Locale.Polish]: "Groźna Mafuyu Kirisu",
        [Locale.SpanishES]: "Mafuyu Kirisu amenazante",
        [Locale.SpanishLATAM]: "Mafuyu Kirisu amenazante",
        [Locale.PortugueseBR]: "Mafuyu Kirisu ameaçadora",
        [Locale.Turkish]: "Tehditkar Mafuyu Kirisu",
        [Locale.Italian]: "Mafuyu Kirisu minacciosa",
        [Locale.Indonesian]: "Mafuyu Kirisu mengancam",
        [Locale.Czech]: "Hrozivá Mafuyu Kirisu",
        [Locale.Japanese]: "威圧的な桐須真冬",
        [Locale.Korean]: "위협적인 키리수 마후유",
        [Locale.ChineseCN]: "桐须真冬 威慑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.WeNeverLearn],
    types: [Type.TextBottom],
    width: 736,
    height: 478,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/wnlMafuyuKirisuMenacing.png"
                width={736}
                height={478}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
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
                        fontSize: 40,
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
