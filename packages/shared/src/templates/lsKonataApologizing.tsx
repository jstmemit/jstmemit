import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataApologizing: Template = {
    name: "lsKonataApologizing",
    displayName: buildLocales("Konata apologizing", {
        [Locale.Russian]: "Извиняющаяся Коната",
        [Locale.Ukrainian]: "Коната вибачається",
        [Locale.Dutch]: "Zich verontschuldigende Konata",
        [Locale.French]: "Konata qui s'excuse",
        [Locale.German]: "Sich entschuldigende Konata",
        [Locale.Polish]: "Przepraszająca Konata",
        [Locale.SpanishES]: "Konata disculpándose",
        [Locale.SpanishLATAM]: "Konata disculpándose",
        [Locale.PortugueseBR]: "Konata se desculpando",
        [Locale.Turkish]: "Özür dileyen Konata",
        [Locale.Italian]: "Konata che si scusa",
        [Locale.Indonesian]: "Konata meminta maaf",
        [Locale.Czech]: "Omlouvající se Konata",
        [Locale.Japanese]: "謝るこなた",
        [Locale.Korean]: "사과하는 코나타",
        [Locale.ChineseCN]: "道歉的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 452,
    animationDuration: 600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataApologizing.gif"
                width={500}
                height={352}
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
