import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoSataniaEvilSmart: Template = {
    name: "gdoSataniaEvilSmart",
    displayName: buildLocales("Evil genius Satania", {
        [Locale.Russian]: "Злой гений Сатания",
        [Locale.Ukrainian]: "Злий геній Сатанія",
        [Locale.Dutch]: "Satania als kwaadaardig genie",
        [Locale.French]: "Satania génie du mal",
        [Locale.German]: "Böses Genie Satania",
        [Locale.Polish]: "Zły geniusz Satania",
        [Locale.SpanishES]: "Satania genio malvada",
        [Locale.SpanishLATAM]: "Satania genio malvada",
        [Locale.PortugueseBR]: "Satania gênio do mal",
        [Locale.Turkish]: "Kötü dahi Satania",
        [Locale.Italian]: "Satania genio del male",
        [Locale.Indonesian]: "Satania sang jenius jahat",
        [Locale.Czech]: "Zlý génius Satania",
        [Locale.Japanese]: "悪の天才サターニャ",
        [Locale.Korean]: "사악한 천재 사타냐",
        [Locale.ChineseCN]: "邪恶天才萨塔妮亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1000,
    height: 421,
    animationDuration: 1620,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaEvilSmart.gif"
                width={500}
                height={421}
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
