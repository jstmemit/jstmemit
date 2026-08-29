import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobFingerGuns: Template = {
    name: "spongebobFingerGuns",
    displayName: buildLocales("SpongeBob finger guns", {
        [Locale.Russian]: "Губка Боб делает пистолетики из пальцев",
        [Locale.Ukrainian]: "Губка Боб робить пістолетики з пальців",
        [Locale.Dutch]: "SpongeBob vingerpistolen",
        [Locale.French]: "Bob l'éponge pistolets avec les doigts",
        [Locale.German]: "SpongeBob Fingerpistolen",
        [Locale.Polish]: "SpongeBob z pistoletami z palców",
        [Locale.SpanishES]: "Bob Esponja pistolas con los dedos",
        [Locale.SpanishLATAM]: "Bob Esponja pistolas con los dedos",
        [Locale.PortugueseBR]: "Bob Esponja fazendo arminhas com os dedos",
        [Locale.Turkish]: "SüngerBob parmak tabancası",
        [Locale.Italian]: "SpongeBob pistole con le dita",
        [Locale.Indonesian]: "SpongeBob pistol jari",
        [Locale.Czech]: "SpongeBob pistole z prstů",
        [Locale.Japanese]: "指鉄砲をするスポンジ・ボブ",
        [Locale.Korean]: "손가락 총 쏘는 스폰지밥",
        [Locale.ChineseCN]: "海绵宝宝比手枪",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.SpongeBob],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 423,
    animationDuration: 2400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/spongebobFingerGuns.gif"
                width={500}
                height={323}
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
