import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsHideriHeartHands: Template = {
    name: "blendsHideriHeartHands",
    displayName: buildLocales("Hideri heart hands", {
        [Locale.Russian]: "Хидери показывает сердечко руками",
        [Locale.Ukrainian]: "Хідері показує сердечко руками",
        [Locale.Dutch]: "Hideri maakt een hartje met haar handen",
        [Locale.French]: "Hideri fait un cœur avec les mains",
        [Locale.German]: "Hideri formt ein Herz mit den Händen",
        [Locale.Polish]: "Hideri robi serduszko rękami",
        [Locale.SpanishES]: "Hideri haciendo un corazón con las manos",
        [Locale.SpanishLATAM]: "Hideri haciendo un corazón con las manos",
        [Locale.PortugueseBR]: "Hideri fazendo coração com as mãos",
        [Locale.Turkish]: "Hideri elleriyle kalp yapıyor",
        [Locale.Italian]: "Hideri che fa un cuore con le mani",
        [Locale.Indonesian]: "Hideri membuat hati dengan tangan",
        [Locale.Czech]: "Hideri dělá srdíčko rukama",
        [Locale.Japanese]: "ヒデリのハートハンド",
        [Locale.Korean]: "히데리 손가락 하트",
        [Locale.ChineseCN]: "绯多莉比爱心手势",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground, Type.FaceImage],
    width: 1710,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriHeartHands.png"
                width={1710}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={320}
                height={320}
                style={{
                    position: "absolute",
                    top: 150,
                    right: 550,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-15deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "8%",
                    width: "25%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 80,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
