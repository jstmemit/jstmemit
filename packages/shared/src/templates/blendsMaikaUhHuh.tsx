import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaUhHuh: Template = {
    name: "blendsMaikaUhHuh",
    displayName: buildLocales("Maika uh-huh", {
        [Locale.Russian]: "Майка ага",
        [Locale.Ukrainian]: "Майка ага",
        [Locale.Dutch]: "Maika uh-huh",
        [Locale.French]: "Maika mh-mh",
        [Locale.German]: "Maika aha",
        [Locale.Polish]: "Maika aha",
        [Locale.SpanishES]: "Maika ajá",
        [Locale.SpanishLATAM]: "Maika ajá",
        [Locale.PortugueseBR]: "Maika aham",
        [Locale.Turkish]: "Maika hıhı",
        [Locale.Italian]: "Maika uh-uh",
        [Locale.Indonesian]: "Maika oh iya",
        [Locale.Czech]: "Maika jasně",
        [Locale.Japanese]: "マイカのうんうん",
        [Locale.Korean]: "마이카 응응",
        [Locale.ChineseCN]: "麻衣花嗯嗯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 1280,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaUhHuh.png"
                width={1280}
                height={720}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "180px",
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
