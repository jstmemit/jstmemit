import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiBlush: Template = {
    name: "rtnobgsMaiBlush",
    displayName: buildLocales("Mai blushing", {
        [Locale.Russian]: "Смущенная Май",
        [Locale.Ukrainian]: "Збентежена Май",
        [Locale.Dutch]: "Blozende Mai",
        [Locale.French]: "Mai rougissante",
        [Locale.German]: "Errötende Mai",
        [Locale.Polish]: "Zarumieniona Mai",
        [Locale.SpanishES]: "Mai sonrojada",
        [Locale.SpanishLATAM]: "Mai sonrojada",
        [Locale.PortugueseBR]: "Mai corada",
        [Locale.Turkish]: "Kızaran Mai",
        [Locale.Italian]: "Mai arrossita",
        [Locale.Indonesian]: "Mai tersipu",
        [Locale.Czech]: "Červenající se Mai",
        [Locale.Japanese]: "赤面する麻衣",
        [Locale.Korean]: "얼굴을 붉히는 마이",
        [Locale.ChineseCN]: "脸红的麻衣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 496,
    animationDuration: 3100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiBlush.gif"
                width={540}
                height={396}
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
