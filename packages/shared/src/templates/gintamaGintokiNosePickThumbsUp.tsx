import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiNosePickThumbsUp: Template = {
    name: "gintamaGintokiNosePickThumbsUp",
    displayName: buildLocales("Gintoki nose pick thumbs up", {
        [Locale.Russian]: "Гинтоки ковыряет в носу и показывает класс",
        [Locale.Ukrainian]: "Гінтокі копирсається в носі і показує клас",
        [Locale.Dutch]: "Gintoki neuspeuteren duim omhoog",
        [Locale.French]: "Gintoki se cure le nez avec un pouce en l'air",
        [Locale.German]: "Gintoki popelt in der Nase Daumen hoch",
        [Locale.Polish]: "Gintoki dłubie w nosie i kciuk w górę",
        [Locale.SpanishES]: "Gintoki hurgándose la nariz y pulgar arriba",
        [Locale.SpanishLATAM]: "Gintoki hurgándose la nariz y pulgar arriba",
        [Locale.PortugueseBR]: "Gintoki cutucando o nariz e polegar para cima",
        [Locale.Turkish]: "Gintoki burnunu karıştırıyor ve başparmak havada",
        [Locale.Italian]: "Gintoki si scaccola e fa pollice in su",
        [Locale.Indonesian]: "Gintoki ngupil jempol ke atas",
        [Locale.Czech]: "Gintoki se dloube v nose a dává palec nahoru",
        [Locale.Japanese]: "鼻ほじりながらサムズアップする銀時",
        [Locale.Korean]: "코 파면서 엄지 척하는 긴토키",
        [Locale.ChineseCN]: "银时抠鼻屎竖大拇指",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 1084,
    height: 1080,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiNosePickThumbsUp.png"
                width={542}
                height={1080}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
