import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaDekuPunching: Template = {
    name: "mhaDekuPunching",
    displayName: buildLocales("Deku punching", {
        [Locale.Russian]: "Деку бьет",
        [Locale.Ukrainian]: "Деку б'є",
        [Locale.Dutch]: "Slaande Deku",
        [Locale.French]: "Deku frappant",
        [Locale.German]: "Schlagender Deku",
        [Locale.Polish]: "Uderzający Deku",
        [Locale.SpanishES]: "Deku golpeando",
        [Locale.SpanishLATAM]: "Deku golpeando",
        [Locale.PortugueseBR]: "Deku socando",
        [Locale.Turkish]: "Yumruk atan Deku",
        [Locale.Italian]: "Deku che dà un pugno",
        [Locale.Indonesian]: "Deku meninju",
        [Locale.Czech]: "Udeřující Deku",
        [Locale.Japanese]: "パンチするデク",
        [Locale.Korean]: "주먹을 날리는 데쿠",
        [Locale.ChineseCN]: "出拳的出久",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 2050,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaDekuPunching.gif"
                width={498}
                height={280}
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
