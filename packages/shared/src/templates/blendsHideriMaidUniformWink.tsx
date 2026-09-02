import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsHideriMaidUniformWink: Template = {
    name: "blendsHideriMaidUniformWink",
    displayName: buildLocales("Hideri maid uniform wink", {
        [Locale.Russian]: "Хидери в форме горничной подмигивает",
        [Locale.Ukrainian]: "Хідері в формі покоївки підморгує",
        [Locale.Dutch]: "Hideri in dienstmeisjesuniform knipoogt",
        [Locale.French]: "Hideri en tenue de bonne fait un clin d'œil",
        [Locale.German]: "Hideri im Maid-Kostüm zwinkert",
        [Locale.Polish]: "Hideri w stroju pokojówki mruga okiem",
        [Locale.SpanishES]: "Hideri con uniforme de maid guiñando el ojo",
        [Locale.SpanishLATAM]: "Hideri con uniforme de maid guiñando el ojo",
        [Locale.PortugueseBR]: "Hideri de uniforme de maid piscando",
        [Locale.Turkish]: "Hideri maid kıyafetiyle göz kırpıyor",
        [Locale.Italian]: "Hideri in uniforme da maid che fa l'occhiolino",
        [Locale.Indonesian]: "Hideri berseragam maid mengedipkan mata",
        [Locale.Czech]: "Hideri v uniformě servírky mrkající",
        [Locale.Japanese]: "メイド服のヒデリのウィンク",
        [Locale.Korean]: "메이드복 히데리 윙크",
        [Locale.ChineseCN]: "女仆装绯多莉眨眼",
    }),
    topics: [Topic.Anime, Topic.BlendS],
    types: [Type.FaceImage, Type.TextBottom],
    width: 425,
    height: 700,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Hideri`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriMaidUniformWink.png"
                width={425}
                height={700}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: 97,
                    left: 190,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(15deg)",
                }}
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
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
