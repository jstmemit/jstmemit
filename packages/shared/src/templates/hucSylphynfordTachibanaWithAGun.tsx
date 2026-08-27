import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucSylphynfordTachibanaWithAGun: Template = {
    name: "hucSylphynfordTachibanaWithAGun",
    displayName: buildLocales("Sylphynford Tachibana with a gun", {
        [Locale.Russian]: "Сильфинфорд Тачибана с пистолетом",
        [Locale.Ukrainian]: "Сільфінфорд Тачібана з пістолетом",
        [Locale.Dutch]: "Sylphynford Tachibana met een pistool",
        [Locale.French]: "Sylphynford Tachibana avec un pistolet",
        [Locale.German]: "Sylphynford Tachibana mit Waffe",
        [Locale.Polish]: "Sylphynford Tachibana z pistoletem",
        [Locale.SpanishES]: "Sylphynford Tachibana con un arma",
        [Locale.SpanishLATAM]: "Sylphynford Tachibana con un arma",
        [Locale.PortugueseBR]: "Sylphynford Tachibana com uma arma",
        [Locale.Turkish]: "Silahlı Sylphynford Tachibana",
        [Locale.Italian]: "Sylphynford Tachibana con una pistola",
        [Locale.Indonesian]: "Sylphynford Tachibana dengan pistol",
        [Locale.Czech]: "Sylphynford Tachibana se zbraní",
        [Locale.Japanese]: "銃を持つ橘・シルフィンフォード",
        [Locale.Korean]: "총을 든 타치바나 실핀포드",
        [Locale.ChineseCN]: "拿枪的橘·希尔芬福特",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 874,
    height: 447,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 10 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucSylphynfordTachibanaWithAGun.png"
                width={437}
                height={447}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "55%",
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
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "45%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
