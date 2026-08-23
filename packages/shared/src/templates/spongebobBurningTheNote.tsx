import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobBurningTheNote: Template = {
    name: "spongebobBurningTheNote",
    displayName: buildLocales("Spongebob burning the note", {
        [Locale.Russian]: "Губка Боб сжигает записку",
        [Locale.Ukrainian]: "Губка Боб спалює записку",
        [Locale.Dutch]: "Spongebob verbrandt de notitie",
        [Locale.French]: "Bob l'éponge brûle le papier",
        [Locale.German]: "Spongebob verbrennt Notiz",
        [Locale.Polish]: "SpongeBob palący notatkę",
        [Locale.SpanishES]: "Bob Esponja quemando la nota",
        [Locale.SpanishLATAM]: "Bob Esponja quemando la nota",
        [Locale.PortugueseBR]: "Bob Esponja queimando o bilhete",
        [Locale.Turkish]: "Notu yakan SüngerBob",
        [Locale.Italian]: "SpongeBob che brucia il biglietto",
        [Locale.Indonesian]: "Spongebob membakar catatan",
        [Locale.Czech]: "Spongebob pálí dopis",
        [Locale.Japanese]: "手紙を燃やすスポンジ・ボブ",
        [Locale.Korean]: "쪽지 태우는 스폰지밥",
        [Locale.ChineseCN]: "海绵宝宝烧纸条",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextCenterWithBackground, Type.ObjectImage, Type.FourOption],
    width: 622,
    height: 727,
    texts: [{ id: 0, description: "bottom text", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "image that gets burned down" }],
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
            <img src={images[0]} width={195} height={275} style={{ position: "absolute", top: 50, left: 45 }} />
            <img
                src={
                    "https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebob.png"
                }
                width={622}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "340px",
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    background: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
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
