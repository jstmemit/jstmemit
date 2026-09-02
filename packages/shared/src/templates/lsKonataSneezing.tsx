import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataSneezing: Template = {
    name: "lsKonataSneezing",
    displayName: buildLocales("Konata sneezing", {
        [Locale.Russian]: "Коната чихает",
        [Locale.Ukrainian]: "Коната чхає",
        [Locale.Dutch]: "Niezende Konata",
        [Locale.French]: "Konata éternuant",
        [Locale.German]: "Niesende Konata",
        [Locale.Polish]: "Kichająca Konata",
        [Locale.SpanishES]: "Konata estornudando",
        [Locale.SpanishLATAM]: "Konata estornudando",
        [Locale.PortugueseBR]: "Konata espirrando",
        [Locale.Turkish]: "Hapşıran Konata",
        [Locale.Italian]: "Konata che starnutisce",
        [Locale.Indonesian]: "Konata bersin",
        [Locale.Czech]: "Kýchající Konata",
        [Locale.Japanese]: "くしゃみをするこなた",
        [Locale.Korean]: "재채기하는 코나타",
        [Locale.ChineseCN]: "打喷嚏的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 690,
    height: 518,
    animationDuration: 1500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataSneezing.gif"
                width={690}
                height={388}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
