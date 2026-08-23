import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobAlone: Template = {
    name: "spongebobAlone",
    displayName: buildLocales("SpongeBob alone", {
        [Locale.Russian]: "Одинокий Губка Боб",
        [Locale.Ukrainian]: "Самотній Губка Боб",
        [Locale.Dutch]: "Eenzame SpongeBob",
        [Locale.French]: "Bob l'éponge seul",
        [Locale.German]: "Einsamer SpongeBob",
        [Locale.Polish]: "Samotny SpongeBob",
        [Locale.SpanishES]: "Bob Esponja solo",
        [Locale.SpanishLATAM]: "Bob Esponja solo",
        [Locale.PortugueseBR]: "Bob Esponja sozinho",
        [Locale.Turkish]: "Yalnız SüngerBob",
        [Locale.Italian]: "SpongeBob da solo",
        [Locale.Indonesian]: "SpongeBob sendirian",
        [Locale.Czech]: "Samotný SpongeBob",
        [Locale.Japanese]: "孤独なスポンジ・ボブ",
        [Locale.Korean]: "혼자 있는 스폰지밥",
        [Locale.ChineseCN]: "孤独的海绵宝宝",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.SpongeBob],
    types: [Type.TextBottomWithBackground, Type.FaceImage, Type.Animated],
    width: 500,
    height: 449,
    animationDuration: 920,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "face in front of SpongeBob" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/spongebobAlone.gif"
                width={500}
                height={359}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 205,
                    right: 160,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
