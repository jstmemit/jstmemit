import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const moneyTonyStark: Template = {
    name: "moneyTonyStark",
    displayName: buildLocales("Money Tony Stark", {
        [Locale.Russian]: "Деньги Тони Старка",
        [Locale.Ukrainian]: "Гроші Тоні Старка",
        [Locale.Dutch]: "Geld Tony Stark",
        [Locale.French]: "Argent Tony Stark",
        [Locale.German]: "Geld Tony Stark",
        [Locale.Polish]: "Pieniądze Tony'ego Starka",
        [Locale.SpanishES]: "Dinero Tony Stark",
        [Locale.SpanishLATAM]: "Dinero Tony Stark",
        [Locale.PortugueseBR]: "Dinheiro Tony Stark",
        [Locale.Turkish]: "Para Tony Stark",
        [Locale.Italian]: "Soldi Tony Stark",
        [Locale.Indonesian]: "Uang Tony Stark",
        [Locale.Czech]: "Peníze Tony Stark",
        [Locale.Japanese]: "トニー・スターク お金",
        [Locale.Korean]: "돈 뿌리는 토니 스타크",
        [Locale.ChineseCN]: "托尼·史塔克撒钱",
    }),
    topics: [Topic.Movies, Topic.IronMan],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 1200,
    height: 1000,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Tony Stark`s face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/moneyTonyStark.png"
                width={1200}
                height={1000}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: 400,
                    left: "49%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "29%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
