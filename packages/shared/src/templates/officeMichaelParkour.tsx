import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const officeMichaelParkour: Template = {
    name: "officeMichaelParkour",
    displayName: buildLocales("Michael parkour", {
        [Locale.Russian]: "Майкл паркур",
        [Locale.Ukrainian]: "Майкл паркур",
        [Locale.Dutch]: "Michael parkour",
        [Locale.French]: "Michael parkour",
        [Locale.German]: "Michael Parkour",
        [Locale.Polish]: "Michael parkour",
        [Locale.SpanishES]: "Michael parkour",
        [Locale.SpanishLATAM]: "Michael parkour",
        [Locale.PortugueseBR]: "Michael parkour",
        [Locale.Turkish]: "Michael parkur",
        [Locale.Italian]: "Michael parkour",
        [Locale.Indonesian]: "Michael parkour",
        [Locale.Czech]: "Michael parkour",
        [Locale.Japanese]: "パルクールをするマイケル",
        [Locale.Korean]: "파쿠르하는 마이클",
        [Locale.ChineseCN]: "迈克尔跑酷",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 498,
    animationDuration: 4160,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeMichaelParkour.gif"
                width={498}
                height={498}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
