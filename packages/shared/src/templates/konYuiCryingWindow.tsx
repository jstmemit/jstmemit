import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konYuiCryingWindow: Template = {
    name: "konYuiCryingWindow",
    displayName: buildLocales("Yui crying by the window", {
        [Locale.Russian]: "Юи плачет у окна",
        [Locale.Ukrainian]: "Юї плаче біля вікна",
        [Locale.Dutch]: "Yui huilend bij het raam",
        [Locale.French]: "Yui pleurant à la fenêtre",
        [Locale.German]: "Yui weint am Fenster",
        [Locale.Polish]: "Yui płacząca przy oknie",
        [Locale.SpanishES]: "Yui llorando en la ventana",
        [Locale.SpanishLATAM]: "Yui llorando en la ventana",
        [Locale.PortugueseBR]: "Yui chorando na janela",
        [Locale.Turkish]: "Pencere kenarında ağlayan Yui",
        [Locale.Italian]: "Yui che piange alla finestra",
        [Locale.Indonesian]: "Yui menangis di dekat jendela",
        [Locale.Czech]: "Yui plačící u okna",
        [Locale.Japanese]: "窓際で泣く唯",
        [Locale.Korean]: "창가에서 우는 유이",
        [Locale.ChineseCN]: "在窗边哭泣的唯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 960,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konYuiCryingWindow.gif"
                width={480}
                height={270}
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
                        fontFamily: font,
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
