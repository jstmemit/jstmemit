import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const evangelionAsukaLangleyDisappointedLook: Template = {
    name: "evangelionAsukaLangleyDisappointedLook",
    displayName: buildLocales("Asuka Langley disappointed look", {
        [Locale.Russian]: "Аска Лэнгли разочарована",
        [Locale.Ukrainian]: "Аска Ленглі розчарована",
        [Locale.Dutch]: "Asuka Langley teleurgestelde blik",
        [Locale.French]: "Asuka Langley regard déçu",
        [Locale.German]: "Asuka Langley enttäuschter Blick",
        [Locale.Polish]: "Asuka Langley rozczarowane spojrzenie",
        [Locale.SpanishES]: "Asuka Langley mirada decepcionada",
        [Locale.SpanishLATAM]: "Asuka Langley mirada decepcionada",
        [Locale.PortugueseBR]: "Asuka Langley olhar decepcionado",
        [Locale.Turkish]: "Asuka Langley hayal kırıklığı bakışı",
        [Locale.Italian]: "Asuka Langley sguardo deluso",
        [Locale.Indonesian]: "Asuka Langley tatapan kecewa",
        [Locale.Czech]: "Asuka Langley zklamaný pohled",
        [Locale.Japanese]: "がっかりするアスカ・ラングレー",
        [Locale.Korean]: "실망한 아스카 랑그레이",
        [Locale.ChineseCN]: "明日香失望的眼神",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextBottom],
    width: 736,
    height: 736,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionAsukaLangleyDisappointedLook.png"
                width={736}
                height={736}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
