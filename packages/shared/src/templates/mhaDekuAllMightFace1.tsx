import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaDekuAllMightFace1: Template = {
    name: "mhaDekuAllMightFace1",
    displayName: buildLocales("Deku All Might face 1", {
        [Locale.Russian]: "Деку с лицом Всемогущего 1",
        [Locale.Ukrainian]: "Деку з обличчям Всемогутнього 1",
        [Locale.Dutch]: "Deku met All Might gezicht 1",
        [Locale.French]: "Visage d'All Might sur Deku 1",
        [Locale.German]: "Deku mit All Might Gesicht 1",
        [Locale.Polish]: "Deku z twarzą All Mighta 1",
        [Locale.SpanishES]: "Cara de All Might en Deku 1",
        [Locale.SpanishLATAM]: "Cara de All Might en Deku 1",
        [Locale.PortugueseBR]: "Rosto de All Might no Deku 1",
        [Locale.Turkish]: "All Might yüzlü Deku 1",
        [Locale.Italian]: "Faccia di All Might su Deku 1",
        [Locale.Indonesian]: "Deku dengan wajah All Might 1",
        [Locale.Czech]: "Deku s tváří All Mighta 1",
        [Locale.Japanese]: "オールマイトの顔のデク 1",
        [Locale.Korean]: "올마이트 얼굴을 한 데쿠 1",
        [Locale.ChineseCN]: "出久的欧尔麦特脸 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 880,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaDekuAllMightFace.gif"
                width={500}
                height={281}
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
