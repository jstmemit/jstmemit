import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const boykisserEnergy: Template = {
    name: "boykisserEnergy",
    displayName: buildLocales("Boykisser energy", {
        [Locale.Russian]: "Энергия boykisser",
        [Locale.Ukrainian]: "Енергія boykisser",
        [Locale.Dutch]: "Boykisser-energie",
        [Locale.French]: "Énergie boykisser",
        [Locale.German]: "Boykisser-Energie",
        [Locale.Polish]: "Energia boykissera",
        [Locale.SpanishES]: "Energía boykisser",
        [Locale.SpanishLATAM]: "Energía boykisser",
        [Locale.PortugueseBR]: "Energia boykisser",
        [Locale.Turkish]: "Boykisser enerjisi",
        [Locale.Italian]: "Energia boykisser",
        [Locale.Indonesian]: "Energi boykisser",
        [Locale.Czech]: "Energie boykissera",
        [Locale.Japanese]: "ボーイキッサーのエネルギー",
        [Locale.Korean]: "보이키서 에너지",
        [Locale.ChineseCN]: "boykisser能量",
    }),
    topics: [Topic.Misc],
    types: [Type.FaceImage],
    width: 665,
    height: 662,
    texts: [],
    images: [{ id: 0, description: "femboy face" }],
    element: ({ images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/boykisserEnergy.jpg"
                width={665}
                height={662}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{ position: "absolute", top: 60, left: 250, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
