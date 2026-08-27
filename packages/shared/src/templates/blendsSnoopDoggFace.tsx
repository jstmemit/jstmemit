import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsSnoopDoggFace: Template = {
    name: "blendsSnoopDoggFace",
    displayName: buildLocales("Maid cast with Snoop Dogg faces", {
        [Locale.Russian]: "Горничные с лицами Снуп Дога",
        [Locale.Ukrainian]: "Покоївки з обличчями Снуп Дога",
        [Locale.Dutch]: "Cast als dienstmeisjes met Snoop Dogg-gezichten",
        [Locale.French]: "Le casting en tenue de bonnes avec les visages de Snoop Dogg",
        [Locale.German]: "Maids mit Snoop-Dogg-Gesichtern",
        [Locale.Polish]: "Pokojówki z twarzami Snoop Dogga",
        [Locale.SpanishES]: "Maids con caras de Snoop Dogg",
        [Locale.SpanishLATAM]: "Maids con caras de Snoop Dogg",
        [Locale.PortugueseBR]: "Maids com rostos do Snoop Dogg",
        [Locale.Turkish]: "Snoop Dogg yüzlü maid kadrosu",
        [Locale.Italian]: "Cast in versione maid con le facce di Snoop Dogg",
        [Locale.Indonesian]: "Karakter maid dengan wajah Snoop Dogg",
        [Locale.Czech]: "Servírky s tvářemi Snoop Dogga",
        [Locale.Japanese]: "スヌープ・ドッグ顔のメイドキャスト",
        [Locale.Korean]: "스눕 독 얼굴 메이드 캐스트",
        [Locale.ChineseCN]: "史努比狗脸女仆全员",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 364,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsSnoopDoggFace.png"
                width={500}
                height={264}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
