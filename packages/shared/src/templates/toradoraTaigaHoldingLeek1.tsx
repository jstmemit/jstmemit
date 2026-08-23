import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaHoldingLeek1: Template = {
    name: "toradoraTaigaHoldingLeek1",
    displayName: buildLocales("Taiga holding leek 1", {
        [Locale.Russian]: "Тайга держит лук-порей 1",
        [Locale.Ukrainian]: "Тайга тримає цибулю-порей 1",
        [Locale.Dutch]: "Taiga houdt prei vast 1",
        [Locale.French]: "Taiga tenant un poireau 1",
        [Locale.German]: "Taiga hält Lauch 1",
        [Locale.Polish]: "Taiga trzymająca por 1",
        [Locale.SpanishES]: "Taiga sosteniendo un puerro 1",
        [Locale.SpanishLATAM]: "Taiga sosteniendo un puerro 1",
        [Locale.PortugueseBR]: "Taiga segurando alho-poró 1",
        [Locale.Turkish]: "Pırasa tutan Taiga 1",
        [Locale.Italian]: "Taiga con in mano un porro 1",
        [Locale.Indonesian]: "Taiga memegang daun bawang 1",
        [Locale.Czech]: "Taiga drží pórek 1",
        [Locale.Japanese]: "ネギを持つ大河 1",
        [Locale.Korean]: "대파를 든 타이가 1",
        [Locale.ChineseCN]: "大河拿着大葱 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 519,
    height: 380,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Taiga`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaHoldingLeek1.png"
                width={519}
                height={290}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 125,
                    left: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
