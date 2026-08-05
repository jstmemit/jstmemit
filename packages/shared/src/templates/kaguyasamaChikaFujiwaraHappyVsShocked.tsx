import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaFujiwaraHappyVsShocked: Template = {
    name: "kaguyasamaChikaFujiwaraHappyVsShocked",
    displayName: buildLocales("Chika Fujiwara happy vs shocked", {
        [Locale.Russian]: "Чика Фудзивара: счастливая против в шоке",
        [Locale.Ukrainian]: "Чіка Фудзівара: щаслива проти в шоці",
        [Locale.Dutch]: "Chika Fujiwara blij vs geschokt",
        [Locale.French]: "Chika Fujiwara heureuse vs choquée",
        [Locale.German]: "Chika Fujiwara glücklich vs geschockt",
        [Locale.Polish]: "Chika Fujiwara szczęśliwa vs w szoku",
        [Locale.SpanishES]: "Chika Fujiwara feliz vs en shock",
        [Locale.SpanishLATAM]: "Chika Fujiwara feliz vs en shock",
        [Locale.PortugueseBR]: "Chika Fujiwara feliz vs chocada",
        [Locale.Turkish]: "Chika Fujiwara mutlu vs şokta",
        [Locale.Italian]: "Chika Fujiwara felice vs scioccata",
        [Locale.Indonesian]: "Chika Fujiwara senang vs terkejut",
        [Locale.Czech]: "Chika Fujiwara šťastná vs v šoku",
        [Locale.Japanese]: "藤原千花 笑顔と驚き",
        [Locale.Korean]: "후지와라 치카 행복 vs 충격",
        [Locale.ChineseCN]: "藤原千花 高兴对比震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TwoOption, Type.TextLeftWithBackground],
    width: 630,
    height: 369,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaChikaFujiwaraHappyVsShocked.png"
                width={315}
                height={369}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: 30,
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
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: 30,
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
