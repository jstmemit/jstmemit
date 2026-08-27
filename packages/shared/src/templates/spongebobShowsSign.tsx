import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobShowsSign: Template = {
    name: "spongebobShowsSign",
    displayName: buildLocales("Spongebob shows sign", {
        [Locale.Russian]: "Губка Боб показывает знак",
        [Locale.Ukrainian]: "Губка Боб показує знак",
        [Locale.Dutch]: "Spongebob toont bord",
        [Locale.French]: "Bob l'éponge montre un panneau",
        [Locale.German]: "Spongebob zeigt Schild",
        [Locale.Polish]: "SpongeBob pokazuje znak",
        [Locale.SpanishES]: "Bob Esponja muestra cartel",
        [Locale.SpanishLATAM]: "Bob Esponja muestra un letrero",
        [Locale.PortugueseBR]: "Bob Esponja mostrando placa",
        [Locale.Turkish]: "SüngerBob tabela gösteriyor",
        [Locale.Italian]: "SpongeBob mostra un cartello",
        [Locale.Indonesian]: "Spongebob menunjukkan papan",
        [Locale.Czech]: "Spongebob ukazuje ceduli",
        [Locale.Japanese]: "看板を見せるスポンジ・ボブ",
        [Locale.Korean]: "표지판 보여주는 스폰지밥",
        [Locale.ChineseCN]: "海绵宝宝展示牌子",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons],
    types: [Type.ObjectImage, Type.TextLeft],
    width: 657,
    height: 493,
    texts: [
        { id: 0, description: "what spongebobBurningTheNote says while holding the sign", minLength: 1, maxLength: 8 },
    ],
    images: [{ id: 0, description: "image on the sign" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobShowsSign.png"
                width={657}
                height={493}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={340}
                style={{ position: "absolute", top: 10, right: 35, borderColor: "black", borderWidth: 3 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "45%",
                    height: "55%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        fontWeight: 700,
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
