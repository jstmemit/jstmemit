import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiPointing: Template = {
    name: "rtnobgsMaiPointing",
    displayName: buildLocales("Mai pointing", {
        [Locale.Russian]: "Указывающая Май",
        [Locale.Ukrainian]: "Май вказує",
        [Locale.Dutch]: "Wijzende Mai",
        [Locale.French]: "Mai qui pointe",
        [Locale.German]: "Zeigende Mai",
        [Locale.Polish]: "Wskazująca Mai",
        [Locale.SpanishES]: "Mai señalando",
        [Locale.SpanishLATAM]: "Mai señalando",
        [Locale.PortugueseBR]: "Mai apontando",
        [Locale.Turkish]: "İşaret eden Mai",
        [Locale.Italian]: "Mai che indica",
        [Locale.Indonesian]: "Mai menunjuk",
        [Locale.Czech]: "Ukazující Mai",
        [Locale.Japanese]: "指差す麻衣",
        [Locale.Korean]: "가리키는 마이",
        [Locale.ChineseCN]: "指着的麻衣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 370,
    animationDuration: 2470,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiPointing.gif"
                width={480}
                height={270}
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
