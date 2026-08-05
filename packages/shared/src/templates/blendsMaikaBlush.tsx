import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsMaikaBlush: Template = {
    name: "blendsMaikaBlush",
    displayName: buildLocales("Maika blush", {
        [Locale.Russian]: "Майка краснеет",
        [Locale.Ukrainian]: "Майка червоніє",
        [Locale.Dutch]: "Maika bloost",
        [Locale.French]: "Maika qui rougit",
        [Locale.German]: "Maika errötet",
        [Locale.Polish]: "Maika się rumieni",
        [Locale.SpanishES]: "Maika sonrojada",
        [Locale.SpanishLATAM]: "Maika sonrojada",
        [Locale.PortugueseBR]: "Maika corada",
        [Locale.Turkish]: "Maika kızarıyor",
        [Locale.Italian]: "Maika arrossisce",
        [Locale.Indonesian]: "Maika tersipu",
        [Locale.Czech]: "Maika se červená",
        [Locale.Japanese]: "マイカの照れ顔",
        [Locale.Korean]: "마이카 얼굴 빨개짐",
        [Locale.ChineseCN]: "麻衣花脸红",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 640,
    height: 447,
    animationDuration: 990,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaBlush.gif"
                width={640}
                height={357}
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
