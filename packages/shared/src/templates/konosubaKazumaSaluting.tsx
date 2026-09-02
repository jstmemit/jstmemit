import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaKazumaSaluting: Template = {
    name: "konosubaKazumaSaluting",
    displayName: buildLocales("Saluting Kazuma", {
        [Locale.Russian]: "Казума отдает честь",
        [Locale.Ukrainian]: "Казума віддає честь",
        [Locale.Dutch]: "Saluerende Kazuma",
        [Locale.French]: "Kazuma faisant le salut",
        [Locale.German]: "Salutierender Kazuma",
        [Locale.Polish]: "Salutujący Kazuma",
        [Locale.SpanishES]: "Kazuma haciendo el saludo",
        [Locale.SpanishLATAM]: "Kazuma haciendo el saludo",
        [Locale.PortugueseBR]: "Kazuma prestando continência",
        [Locale.Turkish]: "Selam veren Kazuma",
        [Locale.Italian]: "Kazuma che fa il saluto",
        [Locale.Indonesian]: "Kazuma memberi hormat",
        [Locale.Czech]: "Salutující Kazuma",
        [Locale.Japanese]: "敬礼するカズマ",
        [Locale.Korean]: "경례하는 카즈마",
        [Locale.ChineseCN]: "敬礼的和真",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 858,
    height: 498,
    animationDuration: 1650,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaKazumaSaluting.gif"
                width={429}
                height={498}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
