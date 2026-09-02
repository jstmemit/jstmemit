import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiSakurajimaApproves: Template = {
    name: "rtnobgsMaiSakurajimaApproves",
    displayName: buildLocales("Mai Sakurajima approves", {
        [Locale.Russian]: "Май Сакурадзима одобряет",
        [Locale.Ukrainian]: "Май Сакурадзіма схвалює",
        [Locale.Dutch]: "Mai Sakurajima keurt goed",
        [Locale.French]: "Mai Sakurajima approuve",
        [Locale.German]: "Mai Sakurajima stimmt zu",
        [Locale.Polish]: "Mai Sakurajima aprobuje",
        [Locale.SpanishES]: "Mai Sakurajima aprueba",
        [Locale.SpanishLATAM]: "Mai Sakurajima aprueba",
        [Locale.PortugueseBR]: "Mai Sakurajima aprova",
        [Locale.Turkish]: "Mai Sakurajima onaylıyor",
        [Locale.Italian]: "Mai Sakurajima approva",
        [Locale.Indonesian]: "Mai Sakurajima setuju",
        [Locale.Czech]: "Mai Sakurajima schvaluje",
        [Locale.Japanese]: "承認する桜島麻衣",
        [Locale.Korean]: "사쿠라지마 마이 승인",
        [Locale.ChineseCN]: "樱岛麻衣赞同",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 600,
    height: 448,
    animationDuration: 3720,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiSakurajimaApproves.gif"
                width={600}
                height={338}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "110px",
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
