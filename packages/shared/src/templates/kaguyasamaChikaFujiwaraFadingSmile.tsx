import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaChikaFujiwaraFadingSmile: Template = {
    name: "kaguyasamaChikaFujiwaraFadingSmile",
    displayName: buildLocales("Chika Fujiwara fading smile", {
        [Locale.Russian]: "Чика Фудзивара: улыбка исчезает",
        [Locale.Ukrainian]: "Чіка Фудзівара: усмішка зникає",
        [Locale.Dutch]: "Chika Fujiwara vervagende glimlach",
        [Locale.French]: "Chika Fujiwara sourire qui s'efface",
        [Locale.German]: "Chika Fujiwara schwindendes Lächeln",
        [Locale.Polish]: "Chika Fujiwara znikający uśmiech",
        [Locale.SpanishES]: "Chika Fujiwara sonrisa que se desvanece",
        [Locale.SpanishLATAM]: "Chika Fujiwara sonrisa que se desvanece",
        [Locale.PortugueseBR]: "Chika Fujiwara sorriso desaparecendo",
        [Locale.Turkish]: "Chika Fujiwara solan gülümseme",
        [Locale.Italian]: "Chika Fujiwara sorriso che svanisce",
        [Locale.Indonesian]: "Chika Fujiwara senyum memudar",
        [Locale.Czech]: "Chika Fujiwara mizející úsměv",
        [Locale.Japanese]: "藤原千花 笑顔が消える",
        [Locale.Korean]: "후지와라 치카 사라지는 미소",
        [Locale.ChineseCN]: "藤原千花 笑容逐渐消失",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.ThreeOption, Type.TextLeftWithBackground],
    width: 630,
    height: 551,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
        { id: 2, description: "third option", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaChikaFujiwaraFadingSmile.png"
                width={315}
                height={551}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "33%",
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
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "33%",
                    width: "50%",
                    height: "33%",
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
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "34%",
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
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
