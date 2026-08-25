import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const parrotBarber1: Template = {
    name: "parrotBarber1",
    displayName: buildLocales("Parrot barber 1", {
        [Locale.Russian]: "Попугай-парикмахер 1",
        [Locale.Ukrainian]: "Папуга-перукар 1",
        [Locale.Dutch]: "Papegaai kapper 1",
        [Locale.French]: "Perroquet barbier 1",
        [Locale.German]: "Papagei Barbier 1",
        [Locale.Polish]: "Papuga fryzjer 1",
        [Locale.SpanishES]: "Loro barbero 1",
        [Locale.SpanishLATAM]: "Loro barbero 1",
        [Locale.PortugueseBR]: "Papagaio barbeiro 1",
        [Locale.Turkish]: "Papağan berber 1",
        [Locale.Italian]: "Pappagallo barbiere 1",
        [Locale.Indonesian]: "Burung beo tukang cukur 1",
        [Locale.Czech]: "Papoušek holič 1",
        [Locale.Japanese]: "オウムの床屋 1",
        [Locale.Korean]: "앵무새 이발사 1",
        [Locale.ChineseCN]: "鹦鹉理发师 1",
    }),
    topics: [Topic.Animals],
    types: [Type.TextBottom],
    width: 658,
    height: 969,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/parrotBarber1.jpg"
                width={658}
                height={969}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
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
