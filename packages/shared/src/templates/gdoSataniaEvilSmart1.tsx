import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaEvilSmart1: Template = {
    name: "gdoSataniaEvilSmart1",
    displayName: buildLocales("Evil genius Satania 1", {
        [Locale.Russian]: "Злой гений Сатания 1",
        [Locale.Ukrainian]: "Злий геній Сатанія 1",
        [Locale.Dutch]: "Satania als kwaadaardig genie 1",
        [Locale.French]: "Satania génie du mal 1",
        [Locale.German]: "Böses Genie Satania 1",
        [Locale.Polish]: "Zły geniusz Satania 1",
        [Locale.SpanishES]: "Satania genio malvada 1",
        [Locale.SpanishLATAM]: "Satania genio malvada 1",
        [Locale.PortugueseBR]: "Satania gênio do mal 1",
        [Locale.Turkish]: "Kötü dahi Satania 1",
        [Locale.Italian]: "Satania genio del male 1",
        [Locale.Indonesian]: "Satania sang jenius jahat 1",
        [Locale.Czech]: "Zlý génius Satania 1",
        [Locale.Japanese]: "悪の天才サターニャ 1",
        [Locale.Korean]: "사악한 천재 사타냐 1",
        [Locale.ChineseCN]: "邪恶天才萨塔妮亚 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 511,
    animationDuration: 1620,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaEvilSmart.gif"
                width={500}
                height={421}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
