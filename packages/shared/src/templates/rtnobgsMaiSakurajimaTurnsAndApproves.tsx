import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiSakurajimaTurnsAndApproves: Template = {
    name: "rtnobgsMaiSakurajimaTurnsAndApproves",
    displayName: buildLocales("Mai Sakurajima turns and approves", {
        [Locale.Russian]: "Май Сакурадзима поворачивается и одобряет",
        [Locale.Ukrainian]: "Май Сакурадзіма повертається і схвалює",
        [Locale.Dutch]: "Mai Sakurajima draait zich om en keurt goed",
        [Locale.French]: "Mai Sakurajima se retourne et approuve",
        [Locale.German]: "Mai Sakurajima dreht sich um und stimmt zu",
        [Locale.Polish]: "Mai Sakurajima odwraca się i aprobuje",
        [Locale.SpanishES]: "Mai Sakurajima se gira y aprueba",
        [Locale.SpanishLATAM]: "Mai Sakurajima se gira y aprueba",
        [Locale.PortugueseBR]: "Mai Sakurajima se vira e aprova",
        [Locale.Turkish]: "Mai Sakurajima döner ve onaylar",
        [Locale.Italian]: "Mai Sakurajima si volta e approva",
        [Locale.Indonesian]: "Mai Sakurajima berbalik dan setuju",
        [Locale.Czech]: "Mai Sakurajima se otočí a schvaluje",
        [Locale.Japanese]: "振り返って承認する桜島麻衣",
        [Locale.Korean]: "돌아보며 승인하는 사쿠라지마 마이",
        [Locale.ChineseCN]: "樱岛麻衣转身并赞同",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 2800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiSakurajimaTurnsAndApproves.gif"
                width={498}
                height={280}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
