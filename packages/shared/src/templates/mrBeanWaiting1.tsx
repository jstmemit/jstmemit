import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mrBeanWaiting1: Template = {
    name: "mrBeanWaiting1",
    displayName: buildLocales("Mr Bean waiting 1", {
        [Locale.Russian]: "Мистер Бин ждет 1",
        [Locale.Ukrainian]: "Містер Бін чекає 1",
        [Locale.Dutch]: "Mr Bean wacht 1",
        [Locale.French]: "Mr Bean qui attend 1",
        [Locale.German]: "Mr Bean wartet 1",
        [Locale.Polish]: "Jaś Fasola czeka 1",
        [Locale.SpanishES]: "Mr Bean esperando 1",
        [Locale.SpanishLATAM]: "Mr Bean esperando 1",
        [Locale.PortugueseBR]: "Mr Bean esperando 1",
        [Locale.Turkish]: "Bekleyen Mr Bean 1",
        [Locale.Italian]: "Mr Bean che aspetta 1",
        [Locale.Indonesian]: "Mr Bean menunggu 1",
        [Locale.Czech]: "Mr Bean čeká 1",
        [Locale.Japanese]: "待っているミスター・ビーン 1",
        [Locale.Korean]: "기다리는 미스터 빈 1",
        [Locale.ChineseCN]: "憨豆先生等待 1",
    }),
    topics: [Topic.Movies, Topic.MrBean],
    types: [Type.TextCenterWithBackground, Type.FaceImage, Type.FourOption],
    width: 736,
    height: 617,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "Mr Bean`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/mrBeanWaiting1.png"
                width={736}
                height={617}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "1%",
                    left: "20%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "1%",
                    right: "19%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "20%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "2%",
                    right: "40%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "250px",
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
                        lineClamp: 1,
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
