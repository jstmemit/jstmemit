import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiPerform: Template = {
    name: "btrBocchiPerform",
    displayName: buildLocales("Bocchi perform", {
        [Locale.Russian]: "Бокки выступает",
        [Locale.Ukrainian]: "Боккі виступає",
        [Locale.Dutch]: "Bocchi optreden",
        [Locale.French]: "Bocchi sur scène",
        [Locale.German]: "Bocchi tritt auf",
        [Locale.Polish]: "Bocchi na scenie",
        [Locale.SpanishES]: "Bocchi actuando",
        [Locale.SpanishLATAM]: "Bocchi actuando",
        [Locale.PortugueseBR]: "Bocchi se apresentando",
        [Locale.Turkish]: "Bocchi sahne alıyor",
        [Locale.Italian]: "Bocchi si esibisce",
        [Locale.Indonesian]: "Bocchi tampil",
        [Locale.Czech]: "Bocchi vystupuje",
        [Locale.Japanese]: "演奏するぼっち",
        [Locale.Korean]: "공연하는 봇치",
        [Locale.ChineseCN]: "波奇表演",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 1100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiPerform.gif"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
                        fontFamily: "Comic Sans MS",
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
