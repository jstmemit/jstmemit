import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const disasterGirl: Template = {
    name: "disasterGirl",
    displayName: buildLocales("Disaster girl", {
        [Locale.Russian]: "Девочка-катастрофа",
        [Locale.Ukrainian]: "Дівчинка-катастрофа",
        [Locale.Dutch]: "Ramp-meisje",
        [Locale.French]: "Fille catastrophe",
        [Locale.German]: "Katastrophen-Mädchen",
        [Locale.Polish]: "Dziewczynka katastrofa",
        [Locale.SpanishES]: "Niña del desastre",
        [Locale.SpanishLATAM]: "Niña del desastre",
        [Locale.PortugueseBR]: "Menina do desastre",
        [Locale.Turkish]: "Felaket kız",
        [Locale.Italian]: "Ragazza del disastro",
        [Locale.Indonesian]: "Gadis bencana",
        [Locale.Czech]: "Dívka katastrofa",
        [Locale.Japanese]: "ディザスターガール",
        [Locale.Korean]: "디재스터 걸",
        [Locale.ChineseCN]: "灾难女孩",
    }),
    topics: [Topic.Reaction, Topic.News],
    types: [Type.TextTop, Type.FaceImage],
    width: 2042,
    height: 1531,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "girl face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/disasterGirl.jpg"
                width={2042}
                height={1531}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={1000}
                height={1000}
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 50,
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
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 120,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
