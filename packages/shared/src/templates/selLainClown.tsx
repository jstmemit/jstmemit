import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainClown: Template = {
    name: "selLainClown",
    displayName: buildLocales("Lain clown", {
        [Locale.Russian]: "Лэйн-клоун",
        [Locale.Ukrainian]: "Лейн-клоун",
        [Locale.Dutch]: "Clown Lain",
        [Locale.French]: "Lain clown",
        [Locale.German]: "Clown Lain",
        [Locale.Polish]: "Klaun Lain",
        [Locale.SpanishES]: "Lain payasa",
        [Locale.SpanishLATAM]: "Lain payasa",
        [Locale.PortugueseBR]: "Lain palhaça",
        [Locale.Turkish]: "Palyaço Lain",
        [Locale.Italian]: "Lain clown",
        [Locale.Indonesian]: "Badut Lain",
        [Locale.Czech]: "Klaun Lain",
        [Locale.Japanese]: "ピエロの玲音",
        [Locale.Korean]: "광대 레인",
        [Locale.ChineseCN]: "小丑玲音",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextBottom, Type.Animated],
    width: 498,
    height: 498,
    animationDuration: 2200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/selLainClown.gif"
                width={498}
                height={498}
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
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
