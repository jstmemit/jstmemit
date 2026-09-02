import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ucwthoUzakiTryingToExplain: Template = {
    name: "ucwthoUzakiTryingToExplain",
    displayName: buildLocales("Uzaki trying to explain", {
        [Locale.Russian]: "Узаки пытается объяснить",
        [Locale.Ukrainian]: "Узакі намагається пояснити",
        [Locale.Dutch]: "Uzaki probeert uit te leggen",
        [Locale.French]: "Uzaki essaie d'expliquer",
        [Locale.German]: "Uzaki versucht zu erklären",
        [Locale.Polish]: "Uzaki próbuje wyjaśnić",
        [Locale.SpanishES]: "Uzaki intentando explicar",
        [Locale.SpanishLATAM]: "Uzaki intentando explicar",
        [Locale.PortugueseBR]: "Uzaki tentando explicar",
        [Locale.Turkish]: "Uzaki açıklamaya çalışıyor",
        [Locale.Italian]: "Uzaki cerca di spiegare",
        [Locale.Indonesian]: "Uzaki mencoba menjelaskan",
        [Locale.Czech]: "Uzaki se snaží vysvětlit",
        [Locale.Japanese]: "説明しようとする宇崎",
        [Locale.Korean]: "설명하려는 우자키",
        [Locale.ChineseCN]: "试图解释的宇崎",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 600,
    height: 443,
    animationDuration: 760,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ucwthoUzakiTryingToExplain.gif"
                width={600}
                height={333}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
