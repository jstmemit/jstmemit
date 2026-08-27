import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaCryingFace: Template = {
    name: "konosubaAquaCryingFace",
    displayName: buildLocales("Aqua crying face", {
        [Locale.Russian]: "Плачущее лицо Аквы",
        [Locale.Ukrainian]: "Плачуче обличчя Акви",
        [Locale.Dutch]: "Aqua huilend gezicht",
        [Locale.French]: "Visage d'Aqua qui pleure",
        [Locale.German]: "Aqua weinendes Gesicht",
        [Locale.Polish]: "Płacząca twarz Aquy",
        [Locale.SpanishES]: "Cara de Aqua llorando",
        [Locale.SpanishLATAM]: "Cara de Aqua llorando",
        [Locale.PortugueseBR]: "Rosto de choro da Aqua",
        [Locale.Turkish]: "Ağlayan Aqua yüzü",
        [Locale.Italian]: "Faccia di Aqua che piange",
        [Locale.Indonesian]: "Wajah Aqua menangis",
        [Locale.Czech]: "Plačící obličej Aquy",
        [Locale.Japanese]: "泣き顔のアクア",
        [Locale.Korean]: "우는 아쿠아 표정",
        [Locale.ChineseCN]: "阿库娅哭泣脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground],
    width: 596,
    height: 465,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konosubaAquaCryingFace.png"
                width={596}
                height={355}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
