import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ucwthoUzakiHanaSmug: Template = {
    name: "ucwthoUzakiHanaSmug",
    displayName: buildLocales("Uzaki Hana smug", {
        [Locale.Russian]: "Самодовольная Хана Узаки",
        [Locale.Ukrainian]: "Самовдоволена Хана Узакі",
        [Locale.Dutch]: "Zelfvoldane Uzaki Hana",
        [Locale.French]: "Uzaki Hana narquoise",
        [Locale.German]: "Selbstgefällige Uzaki Hana",
        [Locale.Polish]: "Samozadowolona Uzaki Hana",
        [Locale.SpanishES]: "Uzaki Hana engreída",
        [Locale.SpanishLATAM]: "Uzaki Hana engreída",
        [Locale.PortugueseBR]: "Uzaki Hana convencida",
        [Locale.Turkish]: "Kendini beğenmiş Uzaki Hana",
        [Locale.Italian]: "Uzaki Hana compiaciuta",
        [Locale.Indonesian]: "Uzaki Hana sombong",
        [Locale.Czech]: "Samolibá Uzaki Hana",
        [Locale.Japanese]: "ドヤ顔の宇崎花",
        [Locale.Korean]: "의기양양한 우자키 하나",
        [Locale.ChineseCN]: "得意的宇崎花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 5530,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ucwthoUzakiHanaSmug.gif"
                width={540}
                height={304}
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
