import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaCondescending: Template = {
    name: "konosubaAquaCondescending",
    displayName: buildLocales("Aqua speaking condescendingly", {
        [Locale.Russian]: "Аква снисходительно говорит",
        [Locale.Ukrainian]: "Аква зверхньо говорить",
        [Locale.Dutch]: "Neerbuigend sprekende Aqua",
        [Locale.French]: "Aqua parlant avec condescendance",
        [Locale.German]: "Herablassend sprechende Aqua",
        [Locale.Polish]: "Protekcjonalnie mówiąca Aqua",
        [Locale.SpanishES]: "Aqua hablando con condescendencia",
        [Locale.SpanishLATAM]: "Aqua hablando con condescendencia",
        [Locale.PortugueseBR]: "Aqua falando com condescendência",
        [Locale.Turkish]: "Küçümseyerek konuşan Aqua",
        [Locale.Italian]: "Aqua che parla con condiscendenza",
        [Locale.Indonesian]: "Aqua berbicara merendahkan",
        [Locale.Czech]: "Povýšeně mluvící Aqua",
        [Locale.Japanese]: "見下して話すアクア",
        [Locale.Korean]: "거만하게 말하는 아쿠아",
        [Locale.ChineseCN]: "居高临下说话的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 870,
    height: 498,
    animationDuration: 1760,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaCondescending.gif"
                width={435}
                height={498}
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
