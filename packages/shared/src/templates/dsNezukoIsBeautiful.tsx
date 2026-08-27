import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dsNezukoIsBeautiful: Template = {
    name: "dsNezukoIsBeautiful",
    displayName: buildLocales("Nezuko is beautiful", {
        [Locale.Russian]: "Нэдзуко прекрасна",
        [Locale.Ukrainian]: "Незуко прекрасна",
        [Locale.Dutch]: "Nezuko is prachtig",
        [Locale.French]: "Nezuko est magnifique",
        [Locale.German]: "Nezuko ist wunderschön",
        [Locale.Polish]: "Nezuko jest piękna",
        [Locale.SpanishES]: "Nezuko es hermosa",
        [Locale.SpanishLATAM]: "Nezuko es hermosa",
        [Locale.PortugueseBR]: "Nezuko é linda",
        [Locale.Turkish]: "Nezuko çok güzel",
        [Locale.Italian]: "Nezuko è bellissima",
        [Locale.Indonesian]: "Nezuko cantik",
        [Locale.Czech]: "Nezuko je krásná",
        [Locale.Japanese]: "禰豆子は美しい",
        [Locale.Korean]: "네즈코는 아름답다",
        [Locale.ChineseCN]: "祢豆子好美",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.FaceImage, Type.TextTopWithBackground],
    width: 1710,
    height: 1105,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 20 }],
    images: [
        { id: 0, description: "Tanjiro's face" },
        { id: 1, description: "Nezuko's face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsNezukoIsBeautiful.png"
                width={1710}
                height={855}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={600}
                height={600}
                style={{ position: "absolute", top: 400, left: 150, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={400}
                height={400}
                style={{ position: "absolute", top: 400, right: 150, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "250px",
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
