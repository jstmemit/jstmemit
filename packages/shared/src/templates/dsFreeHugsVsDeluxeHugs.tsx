import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dsFreeHugsVsDeluxeHugs: Template = {
    name: "dsFreeHugsVsDeluxeHugs",
    displayName: buildLocales("Free hugs vs deluxe hugs", {
        [Locale.Russian]: "Бесплатные объятия vs объятия делюкс",
        [Locale.Ukrainian]: "Безкоштовні обійми vs обійми делюкс",
        [Locale.Dutch]: "Gratis knuffels vs deluxe knuffels",
        [Locale.French]: "Câlins gratuits vs câlins deluxe",
        [Locale.German]: "Kostenlose Umarmungen vs. Deluxe-Umarmungen",
        [Locale.Polish]: "Darmowe przytulasy vs przytulasy deluxe",
        [Locale.SpanishES]: "Abrazos gratis vs abrazos deluxe",
        [Locale.SpanishLATAM]: "Abrazos gratis vs abrazos deluxe",
        [Locale.PortugueseBR]: "Abraços grátis vs abraços deluxe",
        [Locale.Turkish]: "Ücretsiz kucaklaşma vs deluxe kucaklaşma",
        [Locale.Italian]: "Abbracci gratis vs abbracci deluxe",
        [Locale.Indonesian]: "Pelukan gratis vs pelukan deluxe",
        [Locale.Czech]: "Objetí zdarma vs objetí deluxe",
        [Locale.Japanese]: "無料ハグ vs デラックスハグ",
        [Locale.Korean]: "무료 포옹 vs 디럭스 포옹",
        [Locale.ChineseCN]: "免费拥抱vs豪华拥抱",
    }),
    topics: [Topic.Anime, Topic.DemonSlayer],
    types: [Type.FaceImage, Type.TwoOption],
    width: 438,
    height: 412,
    texts: [],
    images: [
        { id: 0, description: "Tanjiro's face" },
        { id: 1, description: "Inosuke's face" },
    ],
    element: ({ images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsFreeHugsVsDeluxeHugs.png"
                width={438}
                height={412}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{ position: "absolute", top: 50, left: 80, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={100}
                height={100}
                style={{ position: "absolute", top: 50, right: 110, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
