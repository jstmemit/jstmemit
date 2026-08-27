import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dogeWithGlasses: Template = {
    name: "dogeWithGlasses",
    displayName: buildLocales("Doge with glasses", {
        [Locale.Russian]: "Пес в очках",
        [Locale.Ukrainian]: "Пес в окулярах",
        [Locale.Dutch]: "Doge met bril",
        [Locale.French]: "Doge avec lunettes",
        [Locale.German]: "Doge mit Brille",
        [Locale.Polish]: "Doge w okularach",
        [Locale.SpanishES]: "Doge con gafas",
        [Locale.SpanishLATAM]: "Doge con lentes",
        [Locale.PortugueseBR]: "Doge de óculos",
        [Locale.Turkish]: "Gözlüklü Doge",
        [Locale.Italian]: "Doge con gli occhiali",
        [Locale.Indonesian]: "Doge berkacamata",
        [Locale.Czech]: "Doge s brýlemi",
        [Locale.Japanese]: "メガネのドージ",
        [Locale.Korean]: "안경 쓴 도지",
        [Locale.ChineseCN]: "戴眼镜的Doge",
    }),
    topics: [Topic.Animals, Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 1024,
    height: 777,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dogeWithGlasses.png"
                width={1024}
                height={777}
                style={{ position: "absolute", top: 0, left: 0 }}
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
