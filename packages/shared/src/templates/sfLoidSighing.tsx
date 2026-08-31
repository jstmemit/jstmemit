import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfLoidSighing: Template = {
    name: "sfLoidSighing",
    displayName: buildLocales("Loid sighing", {
        [Locale.Russian]: "Вздыхающий Лойд",
        [Locale.Ukrainian]: "Лойд зітхає",
        [Locale.Dutch]: "Zuchtende Loid",
        [Locale.French]: "Loid soupirant",
        [Locale.German]: "Seufzender Loid",
        [Locale.Polish]: "Wzdychający Loid",
        [Locale.SpanishES]: "Loid suspirando",
        [Locale.SpanishLATAM]: "Loid suspirando",
        [Locale.PortugueseBR]: "Loid suspirando",
        [Locale.Turkish]: "İç çeken Loid",
        [Locale.Italian]: "Loid che sospira",
        [Locale.Indonesian]: "Loid menghela napas",
        [Locale.Czech]: "Vzdychající Loid",
        [Locale.Japanese]: "ため息をつくロイド",
        [Locale.Korean]: "한숨 쉬는 로이드",
        [Locale.ChineseCN]: "叹气的劳埃德",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 417,
    animationDuration: 2250,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfLoidSighing.gif"
                width={498}
                height={317}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
