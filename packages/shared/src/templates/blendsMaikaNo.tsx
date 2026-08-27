import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaNo: Template = {
    name: "blendsMaikaNo",
    displayName: buildLocales("Maika no", {
        [Locale.Russian]: "Майка говорит нет",
        [Locale.Ukrainian]: "Майка каже ні",
        [Locale.Dutch]: "Maika zegt nee",
        [Locale.French]: "Maika dit non",
        [Locale.German]: "Maika sagt nein",
        [Locale.Polish]: "Maika mówi nie",
        [Locale.SpanishES]: "Maika dice que no",
        [Locale.SpanishLATAM]: "Maika dice que no",
        [Locale.PortugueseBR]: "Maika diz não",
        [Locale.Turkish]: "Maika hayır diyor",
        [Locale.Italian]: "Maika dice no",
        [Locale.Indonesian]: "Maika bilang tidak",
        [Locale.Czech]: "Maika říká ne",
        [Locale.Japanese]: "マイカの「ノー」",
        [Locale.Korean]: "마이카 노",
        [Locale.ChineseCN]: "麻衣花说不",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 390,
    animationDuration: 720,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaNo.webp"
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
