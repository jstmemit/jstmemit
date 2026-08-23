import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaBarnShock: Template = {
    name: "konosubaAquaBarnShock",
    displayName: buildLocales("Aqua barn shock", {
        [Locale.Russian]: "Аква в сарае в шоке",
        [Locale.Ukrainian]: "Аква в сараї в шоці",
        [Locale.Dutch]: "Aqua schuur shock",
        [Locale.French]: "Aqua choc dans la grange",
        [Locale.German]: "Aqua Scheunen-Schock",
        [Locale.Polish]: "Aqua w stodole w szoku",
        [Locale.SpanishES]: "Aqua en shock en el granero",
        [Locale.SpanishLATAM]: "Aqua en shock en el granero",
        [Locale.PortugueseBR]: "Aqua em choque no celeiro",
        [Locale.Turkish]: "Aqua ahır şoku",
        [Locale.Italian]: "Aqua sotto shock nel fienile",
        [Locale.Indonesian]: "Aqua terkejut di gudang",
        [Locale.Czech]: "Aqua v šoku ve stodole",
        [Locale.Japanese]: "馬小屋でショックを受けるアクア",
        [Locale.Korean]: "마구간에서 충격받은 아쿠아",
        [Locale.ChineseCN]: "阿库娅马厩震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground],
    width: 1470,
    height: 978,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 14 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konosubaAquaBarnShock.png"
                width={735}
                height={978}
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
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
