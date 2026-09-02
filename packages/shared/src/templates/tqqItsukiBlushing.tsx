import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqItsukiBlushing: Template = {
    name: "tqqItsukiBlushing",
    displayName: buildLocales("Itsuki blushing", {
        [Locale.Russian]: "Смущенная Ицуки",
        [Locale.Ukrainian]: "Збентежена Іцукі",
        [Locale.Dutch]: "Blozende Itsuki",
        [Locale.French]: "Itsuki rougissante",
        [Locale.German]: "Errötende Itsuki",
        [Locale.Polish]: "Zarumieniona Itsuki",
        [Locale.SpanishES]: "Itsuki sonrojada",
        [Locale.SpanishLATAM]: "Itsuki sonrojada",
        [Locale.PortugueseBR]: "Itsuki corada",
        [Locale.Turkish]: "Kızaran Itsuki",
        [Locale.Italian]: "Itsuki arrossita",
        [Locale.Indonesian]: "Itsuki tersipu",
        [Locale.Czech]: "Červenající se Itsuki",
        [Locale.Japanese]: "赤面する五月",
        [Locale.Korean]: "얼굴을 붉히는 이츠키",
        [Locale.ChineseCN]: "脸红的五月",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 422,
    animationDuration: 3250,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqItsukiBlushing.gif"
                width={498}
                height={322}
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
