import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsKonataDancing: Template = {
    name: "lsKonataDancing",
    displayName: buildLocales("Dancing Konata", {
        [Locale.Russian]: "Танцующая Коната",
        [Locale.Ukrainian]: "Танцююча Коната",
        [Locale.Dutch]: "Dansende Konata",
        [Locale.French]: "Konata qui danse",
        [Locale.German]: "Tanzende Konata",
        [Locale.Polish]: "Tańcząca Konata",
        [Locale.SpanishES]: "Konata bailando",
        [Locale.SpanishLATAM]: "Konata bailando",
        [Locale.PortugueseBR]: "Konata dançando",
        [Locale.Turkish]: "Dans eden Konata",
        [Locale.Italian]: "Konata che balla",
        [Locale.Indonesian]: "Konata menari",
        [Locale.Czech]: "Tančící Konata",
        [Locale.Japanese]: "踊るこなた",
        [Locale.Korean]: "춤추는 코나타",
        [Locale.ChineseCN]: "跳舞的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 1680,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataDancing.gif"
                width={500}
                height={281}
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
