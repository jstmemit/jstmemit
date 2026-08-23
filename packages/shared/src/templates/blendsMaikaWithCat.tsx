import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsMaikaWithCat: Template = {
    name: "blendsMaikaWithCat",
    displayName: buildLocales("Maika with cat", {
        [Locale.Russian]: "Майка с котом",
        [Locale.Ukrainian]: "Майка з котом",
        [Locale.Dutch]: "Maika met kat",
        [Locale.French]: "Maika avec un chat",
        [Locale.German]: "Maika mit Katze",
        [Locale.Polish]: "Maika z kotem",
        [Locale.SpanishES]: "Maika con gato",
        [Locale.SpanishLATAM]: "Maika con gato",
        [Locale.PortugueseBR]: "Maika com gato",
        [Locale.Turkish]: "Maika kediyle",
        [Locale.Italian]: "Maika con il gatto",
        [Locale.Indonesian]: "Maika dengan kucing",
        [Locale.Czech]: "Maika s kočkou",
        [Locale.Japanese]: "猫と一緒のマイカ",
        [Locale.Korean]: "고양이와 마이카",
        [Locale.ChineseCN]: "麻衣花和猫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 3290,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaWithCat.gif"
                width={500}
                height={280}
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
                    padding: "15px",
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
