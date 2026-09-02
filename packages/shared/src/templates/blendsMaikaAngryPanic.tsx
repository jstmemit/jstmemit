import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaAngryPanic: Template = {
    name: "blendsMaikaAngryPanic",
    displayName: buildLocales("Maika angry panic", {
        [Locale.Russian]: "Майка в гневной панике",
        [Locale.Ukrainian]: "Майка в гнівній паніці",
        [Locale.Dutch]: "Maika boos in paniek",
        [Locale.French]: "Maika en panique furieuse",
        [Locale.German]: "Maika wütend in Panik",
        [Locale.Polish]: "Maika w gniewnej panice",
        [Locale.SpanishES]: "Maika en pánico furioso",
        [Locale.SpanishLATAM]: "Maika en pánico furioso",
        [Locale.PortugueseBR]: "Maika em pânico furioso",
        [Locale.Turkish]: "Maika öfkeli panik içinde",
        [Locale.Italian]: "Maika in preda al panico furioso",
        [Locale.Indonesian]: "Maika panik dan marah",
        [Locale.Czech]: "Maika v naštvané panice",
        [Locale.Japanese]: "マイカの怒りパニック",
        [Locale.Korean]: "마이카 화난 패닉",
        [Locale.ChineseCN]: "麻衣花愤怒恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 1280,
    height: 940,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaBlendSAngryPanic.png"
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
                    height: "220px",
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
