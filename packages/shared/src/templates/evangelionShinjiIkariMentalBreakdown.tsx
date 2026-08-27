import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const evangelionShinjiIkariMentalBreakdown: Template = {
    name: "evangelionShinjiIkariMentalBreakdown",
    displayName: buildLocales("Shinji Ikari mental breakdown", {
        [Locale.Russian]: "У Синдзи Икари нервный срыв",
        [Locale.Ukrainian]: "У Шінджі Ікарі нервовий зрив",
        [Locale.Dutch]: "Shinji Ikari mentale instorting",
        [Locale.French]: "Shinji Ikari effondrement mental",
        [Locale.German]: "Shinji Ikari mentaler Zusammenbruch",
        [Locale.Polish]: "Shinji Ikari załamanie nerwowe",
        [Locale.SpanishES]: "Shinji Ikari crisis mental",
        [Locale.SpanishLATAM]: "Shinji Ikari crisis mental",
        [Locale.PortugueseBR]: "Shinji Ikari crise mental",
        [Locale.Turkish]: "Shinji Ikari ruhsal çöküntü",
        [Locale.Italian]: "Shinji Ikari crollo mentale",
        [Locale.Indonesian]: "Shinji Ikari gangguan mental",
        [Locale.Czech]: "Shinji Ikari psychické zhroucení",
        [Locale.Japanese]: "精神崩壊するシンジ・イカリ",
        [Locale.Korean]: "정신붕괴 신지 이카리",
        [Locale.ChineseCN]: "碇真嗣精神崩溃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextTopWithBackground],
    width: 844,
    height: 661,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiIkariMentalBreakdown.png"
                width={844}
                height={551}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
