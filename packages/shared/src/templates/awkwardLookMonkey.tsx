import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const awkwardLookMonkey: Template = {
    name: "awkwardLookMonkey",
    displayName: buildLocales("Awkward look monkey", {
        [Locale.Russian]: "Неловкий взгляд обезьяны",
        [Locale.Ukrainian]: "Незручний погляд мавпи",
        [Locale.Dutch]: "Ongemakkelijk kijkende aap",
        [Locale.French]: "Singe au regard gêné",
        [Locale.German]: "Unangenehmer Blick Affe",
        [Locale.Polish]: "Niezręczne spojrzenie małpy",
        [Locale.SpanishES]: "Mono con mirada incómoda",
        [Locale.SpanishLATAM]: "Mono con mirada incómoda",
        [Locale.PortugueseBR]: "Macaco com olhar constrangedor",
        [Locale.Turkish]: "Garip bakışlı maymun",
        [Locale.Italian]: "Scimmia con sguardo imbarazzato",
        [Locale.Indonesian]: "Monyet tatapan canggung",
        [Locale.Czech]: "Trapný pohled opice",
        [Locale.Japanese]: "気まずい顔のサル",
        [Locale.Korean]: "어색한 표정의 원숭이",
        [Locale.ChineseCN]: "尴尬的猴子",
    }),
    topics: [Topic.Reaction, Topic.Animals],
    types: [Type.TextTopWithBackground],
    width: 750,
    height: 750,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/awkwardLookMonkey.jpg"
                width={750}
                height={750}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
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
export default awkwardLookMonkey;
