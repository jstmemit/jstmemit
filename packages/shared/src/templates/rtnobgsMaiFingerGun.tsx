import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiFingerGun: Template = {
    name: "rtnobgsMaiFingerGun",
    displayName: buildLocales("Mai finger gun", {
        [Locale.Russian]: "Май с пальцем-пистолетом",
        [Locale.Ukrainian]: "Май з пальцем-пістолетом",
        [Locale.Dutch]: "Mai vingerpistool",
        [Locale.French]: "Mai pistolet avec les doigts",
        [Locale.German]: "Mai Fingerpistole",
        [Locale.Polish]: "Mai z pistoletem z palców",
        [Locale.SpanishES]: "Mai pistola de dedos",
        [Locale.SpanishLATAM]: "Mai pistola de dedos",
        [Locale.PortugueseBR]: "Mai pistola de dedo",
        [Locale.Turkish]: "Mai parmak tabancası",
        [Locale.Italian]: "Mai pistola con le dita",
        [Locale.Indonesian]: "Mai pistol jari",
        [Locale.Czech]: "Mai prstová pistole",
        [Locale.Japanese]: "麻衣の指鉄砲",
        [Locale.Korean]: "마이의 손가락 총",
        [Locale.ChineseCN]: "麻衣的手指枪",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 1200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiFingerGun.gif"
                width={500}
                height={281}
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
