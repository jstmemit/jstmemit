import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSistineFibelTeaSip: Template = {
    name: "arobmiSistineFibelTeaSip",
    displayName: buildLocales("Sistine Fibel tea sip", {
        [Locale.Russian]: "Систина Фибель пьет чай",
        [Locale.Ukrainian]: "Сістіна Фібель п'є чай",
        [Locale.Dutch]: "Sistine Fibel drinkt thee",
        [Locale.French]: "Sistine Fibel boit du thé",
        [Locale.German]: "Sistine Fibel trinkt Tee",
        [Locale.Polish]: "Sistine Fibel pije herbatę",
        [Locale.SpanishES]: "Sistine Fibel bebiendo té",
        [Locale.SpanishLATAM]: "Sistine Fibel bebiendo té",
        [Locale.PortugueseBR]: "Sistine Fibel bebendo chá",
        [Locale.Turkish]: "Sistine Fibel çay içiyor",
        [Locale.Italian]: "Sistine Fibel beve il tè",
        [Locale.Indonesian]: "Sistine Fibel minum teh",
        [Locale.Czech]: "Sistine Fibel pije čaj",
        [Locale.Japanese]: "お茶を飲むシスティーナ・フィーベル",
        [Locale.Korean]: "차를 마시는 시스티나 피벨",
        [Locale.ChineseCN]: "希丝缇娜·斐伊贝尔喝茶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground],
    width: 1280,
    height: 1212,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineFibelTeaSip.png"
                width={1280}
                height={1032}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                        fontSize: 60,
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
