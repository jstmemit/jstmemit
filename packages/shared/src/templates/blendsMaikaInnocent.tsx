import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaInnocent: Template = {
    name: "blendsMaikaInnocent",
    displayName: buildLocales("Maika innocent", {
        [Locale.Russian]: "Майка невинная",
        [Locale.Ukrainian]: "Майка невинна",
        [Locale.Dutch]: "Maika onschuldig",
        [Locale.French]: "Maika innocente",
        [Locale.German]: "Maika unschuldig",
        [Locale.Polish]: "Maika niewinna",
        [Locale.SpanishES]: "Maika inocente",
        [Locale.SpanishLATAM]: "Maika inocente",
        [Locale.PortugueseBR]: "Maika inocente",
        [Locale.Turkish]: "Maika masum",
        [Locale.Italian]: "Maika innocente",
        [Locale.Indonesian]: "Maika polos",
        [Locale.Czech]: "Maika nevinná",
        [Locale.Japanese]: "無邪気なマイカ",
        [Locale.Korean]: "순진한 마이카",
        [Locale.ChineseCN]: "麻衣花天真无邪",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1380,
    height: 719,
    animationDuration: 1850,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaInnocent.gif"
                width={690}
                height={719}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
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
