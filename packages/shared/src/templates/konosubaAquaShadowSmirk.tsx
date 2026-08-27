import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaShadowSmirk: Template = {
    name: "konosubaAquaShadowSmirk",
    displayName: buildLocales("Shadowed smirking Aqua", {
        [Locale.Russian]: "Ухмыляющаяся в тени Аква",
        [Locale.Ukrainian]: "Аква, що хитро посміхається в тіні",
        [Locale.Dutch]: "Grijnzende Aqua in de schaduw",
        [Locale.French]: "Aqua souriant narquoisement dans l'ombre",
        [Locale.German]: "Grinsende Aqua im Schatten",
        [Locale.Polish]: "Uśmiechająca się szyderczo Aqua w cieniu",
        [Locale.SpanishES]: "Aqua sonriendo de lado en las sombras",
        [Locale.SpanishLATAM]: "Aqua sonriendo de lado en las sombras",
        [Locale.PortugueseBR]: "Aqua sorrindo de canto nas sombras",
        [Locale.Turkish]: "Gölgede sırıtan Aqua",
        [Locale.Italian]: "Aqua che sorride beffarda nell'ombra",
        [Locale.Indonesian]: "Aqua menyeringai dalam bayangan",
        [Locale.Czech]: "Ušklíbající se Aqua ve stínu",
        [Locale.Japanese]: "影でニヤリと笑うアクア",
        [Locale.Korean]: "그림자 속에서 썩소 짓는 아쿠아",
        [Locale.ChineseCN]: "阴影中暗笑的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 347,
    animationDuration: 2870,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaShadowSmirk.gif"
                width={500}
                height={257}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
                        fontSize: fontSize(texts[0]),
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
