import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaBenderCaptcha: Template = {
    name: "futuramaBenderCaptcha",
    displayName: buildLocales("Bender captcha", {
        [Locale.Russian]: "Капча с Бендером",
        [Locale.Ukrainian]: "Капча з Бендером",
        [Locale.Dutch]: "Bender captcha",
        [Locale.French]: "Captcha Bender",
        [Locale.German]: "Bender Captcha",
        [Locale.Polish]: "Captcha Bendera",
        [Locale.SpanishES]: "Captcha de Bender",
        [Locale.SpanishLATAM]: "Captcha de Bender",
        [Locale.PortugueseBR]: "Captcha do Bender",
        [Locale.Turkish]: "Bender captcha",
        [Locale.Italian]: "Captcha Bender",
        [Locale.Indonesian]: "Captcha Bender",
        [Locale.Czech]: "Bender captcha",
        [Locale.Japanese]: "ベンダーのキャプチャ",
        [Locale.Korean]: "벤더 캡차",
        [Locale.ChineseCN]: "本德验证码",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottom],
    width: 480,
    height: 385,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Bender`s face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaBenderCaptcha.jpg"
                width={480}
                height={385}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "20%",
                    borderRadius: "100%",
                    objectFit: "cover",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
