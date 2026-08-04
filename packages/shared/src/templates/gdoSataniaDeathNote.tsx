import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoSataniaDeathNote: Template = {
    name: "gdoSataniaDeathNote",
    displayName: buildLocales("Satania Death Note", {
        [Locale.Russian]: "Тетрадь смерти Сатании",
        [Locale.Ukrainian]: "Зошит смерті Сатанії",
        [Locale.Dutch]: "Satania Death Note",
        [Locale.French]: "Death Note de Satania",
        [Locale.German]: "Satania Death Note",
        [Locale.Polish]: "Notatnik Śmierci Satanii",
        [Locale.SpanishES]: "Death Note de Satania",
        [Locale.SpanishLATAM]: "Death Note de Satania",
        [Locale.PortugueseBR]: "Death Note da Satania",
        [Locale.Turkish]: "Satania Ölüm Defteri",
        [Locale.Italian]: "Death Note di Satania",
        [Locale.Indonesian]: "Death Note Satania",
        [Locale.Czech]: "Zápisník smrti Satanii",
        [Locale.Japanese]: "サターニャのデスノート",
        [Locale.Korean]: "사타냐 데스노트",
        [Locale.ChineseCN]: "萨塔妮亚死亡笔记",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut, Topic.DeathNote],
    types: [Type.TextBottom],
    width: 500,
    height: 484,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaDeathNote.png"
                width={500}
                height={484}
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
