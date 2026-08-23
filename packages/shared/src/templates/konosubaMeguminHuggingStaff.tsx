import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaMeguminHuggingStaff: Template = {
    name: "konosubaMeguminHuggingStaff",
    displayName: buildLocales("Megumin hugging her staff", {
        [Locale.Russian]: "Мегумин обнимает посох",
        [Locale.Ukrainian]: "Меґумін обіймає посох",
        [Locale.Dutch]: "Megumin omhelst haar staf",
        [Locale.French]: "Megumin serrant son bâton",
        [Locale.German]: "Megumin umarmt ihren Stab",
        [Locale.Polish]: "Megumin przytulająca swój kostur",
        [Locale.SpanishES]: "Megumin abrazando su bastón",
        [Locale.SpanishLATAM]: "Megumin abrazando su bastón",
        [Locale.PortugueseBR]: "Megumin abraçando seu cajado",
        [Locale.Turkish]: "Asasına sarılan Megumin",
        [Locale.Italian]: "Megumin che abbraccia il suo bastone",
        [Locale.Indonesian]: "Megumin memeluk tongkatnya",
        [Locale.Czech]: "Megumin objímající svou hůl",
        [Locale.Japanese]: "杖を抱きしめるめぐみん",
        [Locale.Korean]: "지팡이를 껴안은 메구민",
        [Locale.ChineseCN]: "抱着法杖的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 620,
    animationDuration: 930,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminHuggingStaff.gif"
                width={498}
                height={620}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 70,
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
