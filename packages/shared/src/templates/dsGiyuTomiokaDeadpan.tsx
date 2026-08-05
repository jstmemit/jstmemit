import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dsGiyuTomiokaDeadpan: Template = {
    name: "dsGiyuTomiokaDeadpan",
    displayName: buildLocales("Giyu Tomioka deadpan", {
        [Locale.Russian]: "Гию Томиока с непроницаемым лицом",
        [Locale.Ukrainian]: "Ґію Томіока з незворушним обличчям",
        [Locale.Dutch]: "Giyu Tomioka met uitdrukkingsloos gezicht",
        [Locale.French]: "Giyu Tomioka impassible",
        [Locale.German]: "Giyu Tomioka mit ausdrucksloser Miene",
        [Locale.Polish]: "Giyu Tomioka z beznamiętną twarzą",
        [Locale.SpanishES]: "Giyu Tomioka con cara inexpresiva",
        [Locale.SpanishLATAM]: "Giyu Tomioka con cara inexpresiva",
        [Locale.PortugueseBR]: "Giyu Tomioka com cara impassível",
        [Locale.Turkish]: "Giyu Tomioka ifadesiz yüzle",
        [Locale.Italian]: "Giyu Tomioka con faccia impassibile",
        [Locale.Indonesian]: "Giyu Tomioka wajah datar",
        [Locale.Czech]: "Giyu Tomioka s netečným výrazem",
        [Locale.Japanese]: "無表情の冨岡義勇",
        [Locale.Korean]: "무표정한 토미오카 기유",
        [Locale.ChineseCN]: "富冈义勇面无表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.TextRightWithBackground],
    width: 1624,
    height: 768,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsGiyuTomiokaDeadpan.png"
                width={812}
                height={768}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
