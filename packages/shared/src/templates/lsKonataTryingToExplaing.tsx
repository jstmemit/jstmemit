import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataTryingToExplaing: Template = {
    name: "lsKonataTryingToExplaing",
    displayName: buildLocales("Konata trying to explain", {
        [Locale.Russian]: "Коната пытается объяснить",
        [Locale.Ukrainian]: "Коната намагається пояснити",
        [Locale.Dutch]: "Konata probeert uit te leggen",
        [Locale.French]: "Konata essayant d'expliquer",
        [Locale.German]: "Konata versucht zu erklären",
        [Locale.Polish]: "Konata próbująca wytłumaczyć",
        [Locale.SpanishES]: "Konata intentando explicar",
        [Locale.SpanishLATAM]: "Konata intentando explicar",
        [Locale.PortugueseBR]: "Konata tentando explicar",
        [Locale.Turkish]: "Açıklamaya çalışan Konata",
        [Locale.Italian]: "Konata che cerca di spiegare",
        [Locale.Indonesian]: "Konata mencoba menjelaskan",
        [Locale.Czech]: "Konata snažící se vysvětlit",
        [Locale.Japanese]: "説明しようとするこなた",
        [Locale.Korean]: "설명하려는 코나타",
        [Locale.ChineseCN]: "试图解释的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 554,
    animationDuration: 4100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataTryingToExplaing.gif"
                width={498}
                height={454}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
