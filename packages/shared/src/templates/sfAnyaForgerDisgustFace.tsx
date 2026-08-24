import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const sfAnyaForgerDisgustFace: Template = {
    name: "sfAnyaForgerDisgustFace",
    displayName: buildLocales("Anya Forger disgust face", {
        [Locale.Russian]: "Лицо отвращения Ани Форджер",
        [Locale.Ukrainian]: "Обличчя огиди Ані Форджер",
        [Locale.Dutch]: "Anya Forger walgend gezicht",
        [Locale.French]: "Anya Forger visage dégoûté",
        [Locale.German]: "Anya Forger angewidertes Gesicht",
        [Locale.Polish]: "Anya Forger zdegustowana twarz",
        [Locale.SpanishES]: "Cara de disgusto de Anya Forger",
        [Locale.SpanishLATAM]: "Cara de disgusto de Anya Forger",
        [Locale.PortugueseBR]: "Anya Forger cara de nojo",
        [Locale.Turkish]: "Anya Forger iğrenme yüzü",
        [Locale.Italian]: "Anya Forger faccia disgustata",
        [Locale.Indonesian]: "Anya Forger wajah jijik",
        [Locale.Czech]: "Znechucený obličej Anyi Forgerové",
        [Locale.Japanese]: "アーニャ・フォージャー 嫌悪の顔",
        [Locale.Korean]: "아냐 포저 혐오 표정",
        [Locale.ChineseCN]: "阿尼亚·福杰嫌弃脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground],
    width: 596,
    height: 413,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sfAnyaForgerDisgustFace.png"
                width={596}
                height={323}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 30,
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
