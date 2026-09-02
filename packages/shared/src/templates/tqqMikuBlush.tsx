import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqMikuBlush: Template = {
    name: "tqqMikuBlush",
    displayName: buildLocales("Miku blushing", {
        [Locale.Russian]: "Смущенная Мику",
        [Locale.Ukrainian]: "Збентежена Міку",
        [Locale.Dutch]: "Blozende Miku",
        [Locale.French]: "Miku rougissante",
        [Locale.German]: "Errötende Miku",
        [Locale.Polish]: "Zarumieniona Miku",
        [Locale.SpanishES]: "Miku sonrojada",
        [Locale.SpanishLATAM]: "Miku sonrojada",
        [Locale.PortugueseBR]: "Miku corada",
        [Locale.Turkish]: "Kızaran Miku",
        [Locale.Italian]: "Miku arrossita",
        [Locale.Indonesian]: "Miku tersipu",
        [Locale.Czech]: "Červenající se Miku",
        [Locale.Japanese]: "赤面する三玖",
        [Locale.Korean]: "얼굴을 붉히는 미쿠",
        [Locale.ChineseCN]: "脸红的三玖",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 386,
    animationDuration: 3840,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqMikuBlush.gif"
                width={498}
                height={286}
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
