import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konAzusaNoThanks1: Template = {
    name: "konAzusaNoThanks1",
    displayName: buildLocales("Azusa no thanks 1", {
        [Locale.Russian]: "Азуса: нет, спасибо 1",
        [Locale.Ukrainian]: "Азуса: ні, дякую 1",
        [Locale.Dutch]: "Azusa nee bedankt 1",
        [Locale.French]: "Azusa non merci 1",
        [Locale.German]: "Azusa nein danke 1",
        [Locale.Polish]: "Azusa nie dziękuję 1",
        [Locale.SpanishES]: "Azusa no gracias 1",
        [Locale.SpanishLATAM]: "Azusa no gracias 1",
        [Locale.PortugueseBR]: "Azusa não, obrigado 1",
        [Locale.Turkish]: "Azusa hayır teşekkürler 1",
        [Locale.Italian]: "Azusa no grazie 1",
        [Locale.Indonesian]: "Azusa tidak terima kasih 1",
        [Locale.Czech]: "Azusa ne díky 1",
        [Locale.Japanese]: "あずにゃん 結構です 1",
        [Locale.Korean]: "아즈사 사양할게요 1",
        [Locale.ChineseCN]: "梓 丑拒 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.DefaultText, Type.FaceImage],
    width: 860,
    height: 550,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "Kaguya's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konAzusaNoThanks1.png"
                width={860}
                height={550}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 90,
                    right: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    width: "27%",
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
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
