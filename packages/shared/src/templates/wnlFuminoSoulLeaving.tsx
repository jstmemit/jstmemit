import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const wnlFuminoSoulLeaving: Template = {
    name: "wnlFuminoSoulLeaving",
    displayName: buildLocales("Fumino's soul leaving", {
        [Locale.Russian]: "Душа Фумино покидает тело",
        [Locale.Ukrainian]: "Душа Фуміно покидає тіло",
        [Locale.Dutch]: "Fumino's ziel verlaat haar lichaam",
        [Locale.French]: "L'âme de Fumino quitte son corps",
        [Locale.German]: "Fuminos Seele verlässt ihren Körper",
        [Locale.Polish]: "Dusza Fumino opuszcza ciało",
        [Locale.SpanishES]: "El alma de Fumino abandonando su cuerpo",
        [Locale.SpanishLATAM]: "El alma de Fumino abandonando su cuerpo",
        [Locale.PortugueseBR]: "A alma de Fumino deixando o corpo",
        [Locale.Turkish]: "Fumino'nun ruhu bedenini terk ediyor",
        [Locale.Italian]: "L'anima di Fumino che lascia il corpo",
        [Locale.Indonesian]: "Jiwa Fumino meninggalkan tubuhnya",
        [Locale.Czech]: "Fuminina duše opouští tělo",
        [Locale.Japanese]: "魂が抜ける文乃",
        [Locale.Korean]: "영혼이 빠져나가는 후미노",
        [Locale.ChineseCN]: "文乃灵魂出窍",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.WeNeverLearn],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/wnlFuminoSoulLeaving.gif"
                width={498}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
