import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouSakamotoHeldUp: Template = {
    name: "nichijouSakamotoHeldUp",
    displayName: buildLocales("Sakamoto held up", {
        [Locale.Russian]: "Поднятый Сакамото",
        [Locale.Ukrainian]: "Піднятий Сакамото",
        [Locale.Dutch]: "Omhooggehouden Sakamoto",
        [Locale.French]: "Sakamoto tenu en l'air",
        [Locale.German]: "Hochgehaltener Sakamoto",
        [Locale.Polish]: "Podniesiony Sakamoto",
        [Locale.SpanishES]: "Sakamoto sostenido en alto",
        [Locale.SpanishLATAM]: "Sakamoto sostenido en alto",
        [Locale.PortugueseBR]: "Sakamoto levantado",
        [Locale.Turkish]: "Havaya kaldırılan Sakamoto",
        [Locale.Italian]: "Sakamoto tenuto sollevato",
        [Locale.Indonesian]: "Sakamoto diangkat",
        [Locale.Czech]: "Zvednutý Sakamoto",
        [Locale.Japanese]: "持ち上げられた阪本",
        [Locale.Korean]: "들어올려진 사카모토",
        [Locale.ChineseCN]: "被举起的阪本",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 472,
    animationDuration: 1120,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouSakamotoHeldUp.gif"
                width={500}
                height={372}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
