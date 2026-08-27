import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konYuiHappySmile: Template = {
    name: "konYuiHappySmile",
    displayName: buildLocales("Happy smiling Yui", {
        [Locale.Russian]: "Радостно улыбающаяся Юи",
        [Locale.Ukrainian]: "Радісно усміхнена Юї",
        [Locale.Dutch]: "Blij glimlachende Yui",
        [Locale.French]: "Yui souriant joyeusement",
        [Locale.German]: "Fröhlich lächelnde Yui",
        [Locale.Polish]: "Radośnie uśmiechnięta Yui",
        [Locale.SpanishES]: "Yui sonriendo feliz",
        [Locale.SpanishLATAM]: "Yui sonriendo felizmente",
        [Locale.PortugueseBR]: "Yui sorrindo alegremente",
        [Locale.Turkish]: "Neşeyle gülümseyen Yui",
        [Locale.Italian]: "Yui che sorride felice",
        [Locale.Indonesian]: "Yui tersenyum bahagia",
        [Locale.Czech]: "Radostně se usmívající Yui",
        [Locale.Japanese]: "満面の笑みの唯",
        [Locale.Korean]: "해맑게 웃는 유이",
        [Locale.ChineseCN]: "开心微笑的唯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.TextBottom, Type.Animated],
    width: 500,
    height: 495,
    animationDuration: 1040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konYuiHappySmile.gif"
                width={500}
                height={495}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
                        paddingBottom: "0.2em",
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
