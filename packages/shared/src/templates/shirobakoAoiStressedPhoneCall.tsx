import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiStressedPhoneCall: Template = {
    name: "shirobakoAoiStressedPhoneCall",
    displayName: buildLocales("Aoi Miyamori stressed phone call", {
        [Locale.Russian]: "Напряженный телефонный разговор Аой Миямори",
        [Locale.Ukrainian]: "Напружена телефонна розмова Аой Міяморі",
        [Locale.Dutch]: "Aoi Miyamori gestrest aan de telefoon",
        [Locale.French]: "Aoi Miyamori stressée au téléphone",
        [Locale.German]: "Aoi Miyamori gestresst am Telefon",
        [Locale.Polish]: "Stresująca rozmowa telefoniczna Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori estresada al teléfono",
        [Locale.SpanishLATAM]: "Aoi Miyamori estresada al teléfono",
        [Locale.PortugueseBR]: "Aoi Miyamori estressada no telefone",
        [Locale.Turkish]: "Aoi Miyamori'nin stresli telefon görüşmesi",
        [Locale.Italian]: "Aoi Miyamori stressata al telefono",
        [Locale.Indonesian]: "Aoi Miyamori stres di telepon",
        [Locale.Czech]: "Stresující telefonát Aoi Miyamori",
        [Locale.Japanese]: "電話でストレスを感じる宮森あおい",
        [Locale.Korean]: "전화하며 스트레스 받는 미야모리 아오이",
        [Locale.ChineseCN]: "打电话倍感压力的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 541,
    animationDuration: 1840,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiStressedPhoneCall.gif"
                width={500}
                height={541}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
