import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaSobbingOnCouch: Template = {
    name: "sfAnyaSobbingOnCouch",
    displayName: buildLocales("Anya sobbing on couch", {
        [Locale.Russian]: "Аня рыдает на диване",
        [Locale.Ukrainian]: "Аня ридає на дивані",
        [Locale.Dutch]: "Anya snikkend op de bank",
        [Locale.French]: "Anya sanglotant sur le canapé",
        [Locale.German]: "Schluchzende Anya auf dem Sofa",
        [Locale.Polish]: "Anya szlochająca na kanapie",
        [Locale.SpanishES]: "Anya sollozando en el sofá",
        [Locale.SpanishLATAM]: "Anya sollozando en el sofá",
        [Locale.PortugueseBR]: "Anya soluçando no sofá",
        [Locale.Turkish]: "Kanepede hıçkıran Anya",
        [Locale.Italian]: "Anya che singhiozza sul divano",
        [Locale.Indonesian]: "Anya menangis tersedu-sedu di sofa",
        [Locale.Czech]: "Anya vzlykající na gauči",
        [Locale.Japanese]: "ソファですすり泣くアーニャ",
        [Locale.Korean]: "소파에서 흐느끼는 아냐",
        [Locale.ChineseCN]: "在沙发上啜泣的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 756,
    height: 498,
    animationDuration: 5310,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaSobbingOnCouch.gif"
                width={378}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 9,
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
