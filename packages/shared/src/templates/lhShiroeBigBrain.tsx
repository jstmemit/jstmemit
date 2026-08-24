import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lhShiroeBigBrain: Template = {
    name: "lhShiroeBigBrain",
    displayName: buildLocales("Shiroe big brain", {
        [Locale.Russian]: "Широэ: большой мозг",
        [Locale.Ukrainian]: "Шірое: великий мозок",
        [Locale.Dutch]: "Shiroe groot brein",
        [Locale.French]: "Shiroe gros cerveau",
        [Locale.German]: "Shiroe großes Gehirn",
        [Locale.Polish]: "Shiroe wielki mózg",
        [Locale.SpanishES]: "Shiroe gran cerebro",
        [Locale.SpanishLATAM]: "Shiroe gran cerebro",
        [Locale.PortugueseBR]: "Shiroe cérebro grande",
        [Locale.Turkish]: "Shiroe büyük beyin",
        [Locale.Italian]: "Shiroe cervellone",
        [Locale.Indonesian]: "Shiroe otak besar",
        [Locale.Czech]: "Shiroe velký mozek",
        [Locale.Japanese]: "シロエ 悪巧み顔",
        [Locale.Korean]: "시로에 큰 그림",
        [Locale.ChineseCN]: "城惠 腹黑推眼镜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LogHorizon],
    types: [Type.TextBottomWithBackground],
    width: 736,
    height: 524,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/lhShiroeBigBrain.png"
                width={736}
                height={414}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
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
