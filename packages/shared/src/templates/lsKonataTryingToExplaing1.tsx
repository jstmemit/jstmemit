import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataTryingToExplaing1: Template = {
    name: "lsKonataTryingToExplaing1",
    displayName: buildLocales("Konata trying to explain 1", {
        [Locale.Russian]: "Коната пытается объяснить 1",
        [Locale.Ukrainian]: "Коната намагається пояснити 1",
        [Locale.Dutch]: "Konata probeert uit te leggen 1",
        [Locale.French]: "Konata essayant d'expliquer 1",
        [Locale.German]: "Konata versucht zu erklären 1",
        [Locale.Polish]: "Konata próbująca wytłumaczyć 1",
        [Locale.SpanishES]: "Konata intentando explicar 1",
        [Locale.SpanishLATAM]: "Konata intentando explicar 1",
        [Locale.PortugueseBR]: "Konata tentando explicar 1",
        [Locale.Turkish]: "Açıklamaya çalışan Konata 1",
        [Locale.Italian]: "Konata che cerca di spiegare 1",
        [Locale.Indonesian]: "Konata mencoba menjelaskan 1",
        [Locale.Czech]: "Konata snažící se vysvětlit 1",
        [Locale.Japanese]: "説明しようとするこなた 1",
        [Locale.Korean]: "설명하려는 코나타 1",
        [Locale.ChineseCN]: "试图解释的此方 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 454,
    animationDuration: 4100,
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
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
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
