import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiCreepyFace: Template = {
    name: "gintamaGintokiCreepyFace",
    displayName: buildLocales("Gintoki creepy face", {
        [Locale.Russian]: "Жуткое лицо Гинтоки",
        [Locale.Ukrainian]: "Моторошне обличчя Гінтокі",
        [Locale.Dutch]: "Gintoki eng gezicht",
        [Locale.French]: "Visage effrayant de Gintoki",
        [Locale.German]: "Gintokis gruseliges Gesicht",
        [Locale.Polish]: "Przerażająca twarz Gintokiego",
        [Locale.SpanishES]: "Cara espeluznante de Gintoki",
        [Locale.SpanishLATAM]: "Cara espeluznante de Gintoki",
        [Locale.PortugueseBR]: "Rosto assustador do Gintoki",
        [Locale.Turkish]: "Gintoki ürpertici yüz",
        [Locale.Italian]: "Faccia inquietante di Gintoki",
        [Locale.Indonesian]: "Wajah menyeramkan Gintoki",
        [Locale.Czech]: "Děsivý obličej Gintokiho",
        [Locale.Japanese]: "銀時の不気味な顔",
        [Locale.Korean]: "긴토키 소름 돋는 표정",
        [Locale.ChineseCN]: "银时惊悚脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 875,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiCreepyFace.png"
                width={1200}
                height={675}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "200px",
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
