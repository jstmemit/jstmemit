import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const purestCookie: Template = {
    name: "purestCookie",
    displayName: buildLocales("Purest cookie", {
        [Locale.Russian]: "Самая чистая печенька",
        [Locale.Ukrainian]: "Найчистіше печиво",
        [Locale.Dutch]: "Puurste koekje",
        [Locale.French]: "Biscuit le plus pur",
        [Locale.German]: "Reinster Keks",
        [Locale.Polish]: "Najczystsze ciastko",
        [Locale.SpanishES]: "Galleta más pura",
        [Locale.SpanishLATAM]: "Galleta más pura",
        [Locale.PortugueseBR]: "Biscoito mais puro",
        [Locale.Turkish]: "En saf kurabiye",
        [Locale.Italian]: "Biscotto più puro",
        [Locale.Indonesian]: "Kue paling murni",
        [Locale.Czech]: "Nejčistší sušenka",
        [Locale.Japanese]: "最も純粋なクッキー",
        [Locale.Korean]: "가장 순수한 쿠키",
        [Locale.ChineseCN]: "最纯洁的饼干",
    }),
    topics: [Topic.Misc],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 1067,
    height: 591,
    texts: [],
    images: [{ id: 0, description: "Purest cookies" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 300,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/purestCookie.png"
                width={1067}
                height={591}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
