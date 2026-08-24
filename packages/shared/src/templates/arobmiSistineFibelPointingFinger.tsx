import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSistineFibelPointingFinger: Template = {
    name: "arobmiSistineFibelPointingFinger",
    displayName: buildLocales("Sistine Fibel pointing finger", {
        [Locale.Russian]: "Систина Фибель указывает пальцем",
        [Locale.Ukrainian]: "Сістіна Фібель вказує пальцем",
        [Locale.Dutch]: "Sistine Fibel wijst met haar vinger",
        [Locale.French]: "Sistine Fibel pointant du doigt",
        [Locale.German]: "Sistine Fibel zeigt mit dem Finger",
        [Locale.Polish]: "Sistine Fibel wskazująca palcem",
        [Locale.SpanishES]: "Sistine Fibel señalando con el dedo",
        [Locale.SpanishLATAM]: "Sistine Fibel señalando con el dedo",
        [Locale.PortugueseBR]: "Sistine Fibel apontando o dedo",
        [Locale.Turkish]: "Sistine Fibel parmağıyla işaret ediyor",
        [Locale.Italian]: "Sistine Fibel che punta il dito",
        [Locale.Indonesian]: "Sistine Fibel menunjuk jari",
        [Locale.Czech]: "Sistine Fibel ukazuje prstem",
        [Locale.Japanese]: "指を差すシスティーナ・フィーベル",
        [Locale.Korean]: "손가락으로 가리키는 시스티나 피벨",
        [Locale.ChineseCN]: "希丝缇娜·斐伊贝尔伸手指着",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground],
    width: 400,
    height: 304,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineFibelPointingFinger.png"
                width={400}
                height={234}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "70px",
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
                        fontSize: 25,
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
