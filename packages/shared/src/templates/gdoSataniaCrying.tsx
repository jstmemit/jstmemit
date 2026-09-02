import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaCrying: Template = {
    name: "gdoSataniaCrying",
    displayName: buildLocales("Satania crying", {
        [Locale.Russian]: "Плачущая Сатания",
        [Locale.Ukrainian]: "Сатанія плаче",
        [Locale.Dutch]: "Huilende Satania",
        [Locale.French]: "Satania qui pleure",
        [Locale.German]: "Weinende Satania",
        [Locale.Polish]: "Płacząca Satania",
        [Locale.SpanishES]: "Satania llorando",
        [Locale.SpanishLATAM]: "Satania llorando",
        [Locale.PortugueseBR]: "Satania chorando",
        [Locale.Turkish]: "Ağlayan Satania",
        [Locale.Italian]: "Satania che piange",
        [Locale.Indonesian]: "Satania menangis",
        [Locale.Czech]: "Plačící Satania",
        [Locale.Japanese]: "泣くサターニャ",
        [Locale.Korean]: "우는 사타냐",
        [Locale.ChineseCN]: "哭泣的萨塔妮亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextBottom],
    width: 472,
    height: 475,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaCrying.png"
                width={472}
                height={475}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
