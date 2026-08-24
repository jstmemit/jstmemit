import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaAndAmiChibiAnimalEars: Template = {
    name: "toradoraTaigaAndAmiChibiAnimalEars",
    displayName: buildLocales("Taiga and Ami chibi animal ears", {
        [Locale.Russian]: "Тайга и Ами: чиби с ушками животных",
        [Locale.Ukrainian]: "Тайга і Амі: чібі з вушками тварин",
        [Locale.Dutch]: "Taiga en Ami chibi dierenoren",
        [Locale.French]: "Taiga et Ami chibi oreilles d'animaux",
        [Locale.German]: "Taiga und Ami Chibi Tierohren",
        [Locale.Polish]: "Chibi Taiga i Ami z uszami zwierząt",
        [Locale.SpanishES]: "Taiga y Ami chibi orejas de animal",
        [Locale.SpanishLATAM]: "Taiga y Ami chibi orejas de animal",
        [Locale.PortugueseBR]: "Taiga e Ami chibi orelhas de animal",
        [Locale.Turkish]: "Taiga ve Ami chibi hayvan kulakları",
        [Locale.Italian]: "Taiga e Ami chibi con orecchie da animale",
        [Locale.Indonesian]: "Taiga dan Ami chibi telinga hewan",
        [Locale.Czech]: "Chibi Taiga a Ami se zvířecíma ušima",
        [Locale.Japanese]: "大河と亜美 ちびキャラ 獣耳",
        [Locale.Korean]: "타이가와 아미 꼬마 동물 귀",
        [Locale.ChineseCN]: "大河和亚美 兽耳Q版",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextTopWithBackground],
    width: 848,
    height: 630,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaAndAmiChibiAnimalEars.png"
                width={848}
                height={480}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
                        fontFamily: font,
                        fontSize: 50,
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
