import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaMikoPointingAngry: Template = {
    name: "kaguyasamaMikoPointingAngry",
    displayName: buildLocales("Angry Miko pointing", {
        [Locale.Russian]: "Злая Мико указывает пальцем",
        [Locale.Ukrainian]: "Зла Міко вказує пальцем",
        [Locale.Dutch]: "Boze wijzende Miko",
        [Locale.French]: "Miko en colère pointant du doigt",
        [Locale.German]: "Wütend zeigende Miko",
        [Locale.Polish]: "Zła Miko wskazująca palcem",
        [Locale.SpanishES]: "Miko enfadada señalando",
        [Locale.SpanishLATAM]: "Miko enojada señalando",
        [Locale.PortugueseBR]: "Miko brava apontando",
        [Locale.Turkish]: "İşaret eden kızgın Miko",
        [Locale.Italian]: "Miko arrabbiata che indica",
        [Locale.Indonesian]: "Miko marah menunjuk",
        [Locale.Czech]: "Naštvaná Miko ukazující prstem",
        [Locale.Japanese]: "怒って指差すミコ",
        [Locale.Korean]: "화내며 가리키는 미코",
        [Locale.ChineseCN]: "生气指人的弥子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 368,
    animationDuration: 3000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaMikoPointingAngry.gif"
                width={498}
                height={278}
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
