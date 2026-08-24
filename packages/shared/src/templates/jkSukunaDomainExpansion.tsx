import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkSukunaDomainExpansion: Template = {
    name: "jkSukunaDomainExpansion",
    displayName: buildLocales("Sukuna's Domain Expansion", {
        [Locale.Russian]: "Расширение территории Сукуны",
        [Locale.Ukrainian]: "Розширення території Сукуни",
        [Locale.Dutch]: "Sukuna's domeinuitbreiding",
        [Locale.French]: "Extension du territoire de Sukuna",
        [Locale.German]: "Sukunas Sphärenentfaltung",
        [Locale.Polish]: "Rozszerzenie domeny Sukuny",
        [Locale.SpanishES]: "Expansión de dominio de Sukuna",
        [Locale.SpanishLATAM]: "Expansión de dominio de Sukuna",
        [Locale.PortugueseBR]: "Expansão de Domínio do Sukuna",
        [Locale.Turkish]: "Sukuna'nın alan genişletmesi",
        [Locale.Italian]: "Espansione del dominio di Sukuna",
        [Locale.Indonesian]: "Perluasan Domain Sukuna",
        [Locale.Czech]: "Sukunova expanze domény",
        [Locale.Japanese]: "宿儺の領域展開",
        [Locale.Korean]: "스쿠나의 영역 전개",
        [Locale.ChineseCN]: "宿傩的领域展开",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 371,
    animationDuration: 1330,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/jkSukunaDomainExpansion.gif"
                width={498}
                height={281}
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
                    padding: "10px",
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
