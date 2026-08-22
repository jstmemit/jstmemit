import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaCryingPout: Template = {
    name: "kaguyasamaKaguyaCryingPout",
    displayName: buildLocales("Crying and pouting Kaguya", {
        [Locale.Russian]: "Плачущая и надутая Кагуя",
        [Locale.Ukrainian]: "Заплакана Каґуя дметься",
        [Locale.Dutch]: "Huilende en pruilende Kaguya",
        [Locale.French]: "Kaguya qui pleure et boude",
        [Locale.German]: "Weinende und schmollende Kaguya",
        [Locale.Polish]: "Płacząca i dąsająca się Kaguya",
        [Locale.SpanishES]: "Kaguya llorando y haciendo pucheros",
        [Locale.SpanishLATAM]: "Kaguya llorando y haciendo pucheros",
        [Locale.PortugueseBR]: "Kaguya chorando e fazendo bico",
        [Locale.Turkish]: "Ağlayan ve dudak büken Kaguya",
        [Locale.Italian]: "Kaguya che piange e mette il broncio",
        [Locale.Indonesian]: "Kaguya menangis dan merajuk",
        [Locale.Czech]: "Plačící a trucující Kaguya",
        [Locale.Japanese]: "泣きながら拗ねるかぐや",
        [Locale.Korean]: "울면서 삐진 카구야",
        [Locale.ChineseCN]: "哭着嘟嘴的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 656,
    height: 458,
    animationDuration: 1680,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaCryingPout.gif"
                width={656}
                height={368}
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
