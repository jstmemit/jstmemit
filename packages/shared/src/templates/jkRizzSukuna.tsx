import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkRizzSukuna: Template = {
    name: "jkRizzSukuna",
    displayName: buildLocales("Rizz Sukuna", {
        [Locale.Russian]: "Ризз Сукуна",
        [Locale.Ukrainian]: "Різз Сукуна",
        [Locale.Dutch]: "Rizz Sukuna",
        [Locale.French]: "Rizz Sukuna",
        [Locale.German]: "Rizz Sukuna",
        [Locale.Polish]: "Rizz Sukuna",
        [Locale.SpanishES]: "Rizz Sukuna",
        [Locale.SpanishLATAM]: "Rizz Sukuna",
        [Locale.PortugueseBR]: "Rizz Sukuna",
        [Locale.Turkish]: "Rizz Sukuna",
        [Locale.Italian]: "Rizz Sukuna",
        [Locale.Indonesian]: "Rizz Sukuna",
        [Locale.Czech]: "Rizz Sukuna",
        [Locale.Japanese]: "宿儺 リズ",
        [Locale.Korean]: "리즈 스쿠나",
        [Locale.ChineseCN]: "两面宿傩 Rizz",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground],
    width: 692,
    height: 551,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkRizzSukuna.png"
                width={692}
                height={441}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
