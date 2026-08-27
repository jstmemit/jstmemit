import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const evangelionShinjiSeriousFace: Template = {
    name: "evangelionShinjiSeriousFace",
    displayName: buildLocales("Shinji serious face", {
        [Locale.Russian]: "Синдзи с серьёзным лицом",
        [Locale.Ukrainian]: "Шінджі із серйозним обличчям",
        [Locale.Dutch]: "Shinji serieus gezicht",
        [Locale.French]: "Shinji visage sérieux",
        [Locale.German]: "Shinji ernstes Gesicht",
        [Locale.Polish]: "Shinji z poważną miną",
        [Locale.SpanishES]: "Shinji con cara seria",
        [Locale.SpanishLATAM]: "Shinji con cara seria",
        [Locale.PortugueseBR]: "Shinji com rosto sério",
        [Locale.Turkish]: "Shinji ciddi yüz ifadesiyle",
        [Locale.Italian]: "Shinji faccia seria",
        [Locale.Indonesian]: "Shinji wajah serius",
        [Locale.Czech]: "Shinji s vážným výrazem",
        [Locale.Japanese]: "真剣な顔のシンジ",
        [Locale.Korean]: "진지한 표정 신지",
        [Locale.ChineseCN]: "真嗣严肃的表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextTopWithBackground],
    width: 1000,
    height: 800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiSeriousFace.png"
                width={1000}
                height={600}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "200px",
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
