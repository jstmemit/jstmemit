import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaMeguminSmug: Template = {
    name: "konosubaMeguminSmug",
    displayName: buildLocales("Smug Megumin", {
        [Locale.Russian]: "Самодовольная Мегумин",
        [Locale.Ukrainian]: "Самозадоволена Меґумін",
        [Locale.Dutch]: "Zelfingenomen Megumin",
        [Locale.French]: "Megumin suffisante",
        [Locale.German]: "Selbstgefällige Megumin",
        [Locale.Polish]: "Zadowolona z siebie Megumin",
        [Locale.SpanishES]: "Megumin presumida",
        [Locale.SpanishLATAM]: "Megumin presumida",
        [Locale.PortugueseBR]: "Megumin presunçosa",
        [Locale.Turkish]: "Kendini beğenmiş Megumin",
        [Locale.Italian]: "Megumin compiaciuta",
        [Locale.Indonesian]: "Megumin yang sombong",
        [Locale.Czech]: "Samolibá Megumin",
        [Locale.Japanese]: "ドヤ顔のめぐみん",
        [Locale.Korean]: "의기양양한 메구민",
        [Locale.ChineseCN]: "得意的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 390,
    animationDuration: 2050,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminSmug.gif"
                width={540}
                height={300}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
                        fontSize: 30,
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
