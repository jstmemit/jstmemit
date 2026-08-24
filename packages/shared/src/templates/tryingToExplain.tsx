import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tryingToExplain: Template = {
    name: "tryingToExplain",
    displayName: buildLocales("Trying to explain", {
        [Locale.Russian]: "Пытается объяснить",
        [Locale.Ukrainian]: "Намагається пояснити",
        [Locale.Dutch]: "Proberen uit te leggen",
        [Locale.French]: "Essayant d'expliquer",
        [Locale.German]: "Versuchen zu erklären",
        [Locale.Polish]: "Próba wyjaśnienia",
        [Locale.SpanishES]: "Intentando explicar",
        [Locale.SpanishLATAM]: "Intentando explicar",
        [Locale.PortugueseBR]: "Tentando explicar",
        [Locale.Turkish]: "Açıklamaya çalışıyor",
        [Locale.Italian]: "Cercando di spiegare",
        [Locale.Indonesian]: "Mencoba menjelaskan",
        [Locale.Czech]: "Snaží se vysvětlit",
        [Locale.Japanese]: "必死に説明しようとする",
        [Locale.Korean]: "설명하려는 중",
        [Locale.ChineseCN]: "试图解释",
    }),
    topics: [Topic.Movies, Topic.Reaction],
    types: [Type.FaceImage, Type.TextTopWithBackground],
    width: 1080,
    height: 1118,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tryingToExplain.png"
                width={1080}
                height={1118}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 420,
                    left: 290,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "28%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
