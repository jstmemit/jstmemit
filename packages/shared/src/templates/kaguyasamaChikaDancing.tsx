import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaChikaDancing: Template = {
    name: "kaguyasamaChikaDancing",
    displayName: buildLocales("Dancing Chika", {
        [Locale.Russian]: "Танцующая Чика",
        [Locale.Ukrainian]: "Танцююча Чіка",
        [Locale.Dutch]: "Dansende Chika",
        [Locale.French]: "Chika qui danse",
        [Locale.German]: "Tanzende Chika",
        [Locale.Polish]: "Tańcząca Chika",
        [Locale.SpanishES]: "Chika bailando",
        [Locale.SpanishLATAM]: "Chika bailando",
        [Locale.PortugueseBR]: "Chika dançando",
        [Locale.Turkish]: "Dans eden Chika",
        [Locale.Italian]: "Chika che balla",
        [Locale.Indonesian]: "Chika menari",
        [Locale.Czech]: "Tančící Chika",
        [Locale.Japanese]: "踊るチカ",
        [Locale.Korean]: "춤추는 치카",
        [Locale.ChineseCN]: "跳舞的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 463,
    animationDuration: 2000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaDancing.gif"
                width={498}
                height={463}
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
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
