import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaSmug: Template = {
    name: "konosubaAquaSmug",
    displayName: buildLocales("Smug Aqua", {
        [Locale.Russian]: "Самодовольная Аква",
        [Locale.Ukrainian]: "Самозадоволена Аква",
        [Locale.Dutch]: "Zelfingenomen Aqua",
        [Locale.French]: "Aqua suffisante",
        [Locale.German]: "Selbstgefällige Aqua",
        [Locale.Polish]: "Zadowolona z siebie Aqua",
        [Locale.SpanishES]: "Aqua presumida",
        [Locale.SpanishLATAM]: "Aqua presumida",
        [Locale.PortugueseBR]: "Aqua presunçosa",
        [Locale.Turkish]: "Kendini beğenmiş Aqua",
        [Locale.Italian]: "Aqua compiaciuta",
        [Locale.Indonesian]: "Aqua yang sombong",
        [Locale.Czech]: "Samolibá Aqua",
        [Locale.Japanese]: "ドヤ顔のアクア",
        [Locale.Korean]: "의기양양한 아쿠아",
        [Locale.ChineseCN]: "得意的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1000,
    height: 500,
    animationDuration: 420,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaSmug.gif"
                width={500}
                height={500}
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 70,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
