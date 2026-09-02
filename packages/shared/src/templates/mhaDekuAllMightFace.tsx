import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaDekuAllMightFace: Template = {
    name: "mhaDekuAllMightFace",
    displayName: buildLocales("Deku All Might face", {
        [Locale.Russian]: "Деку: лицо Всемогущего",
        [Locale.Ukrainian]: "Деку: обличчя Всемогутнього",
        [Locale.Dutch]: "Deku All Might gezicht",
        [Locale.French]: "Deku visage All Might",
        [Locale.German]: "Deku All Might Gesicht",
        [Locale.Polish]: "Twarz All Mighta u Deku",
        [Locale.SpanishES]: "Cara de All Might en Deku",
        [Locale.SpanishLATAM]: "Cara de All Might en Deku",
        [Locale.PortugueseBR]: "Rosto do All Might no Deku",
        [Locale.Turkish]: "Deku All Might yüzü",
        [Locale.Italian]: "Faccia di All Might su Deku",
        [Locale.Indonesian]: "Wajah All Might Deku",
        [Locale.Czech]: "Deku s obličejem All Mighta",
        [Locale.Japanese]: "オールマイト顔のデク",
        [Locale.Korean]: "데쿠 올마이트 얼굴",
        [Locale.ChineseCN]: "绿谷出久 欧尔麦特脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 898,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/mhaDekuAllMightFace.png"
                width={1200}
                height={668}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "230px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "25px",
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
