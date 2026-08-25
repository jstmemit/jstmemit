import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const oneDollarPrivateIsland: Template = {
    name: "oneDollarPrivateIsland",
    displayName: buildLocales("One dollar private island", {
        [Locale.Russian]: "Частный остров за один доллар",
        [Locale.Ukrainian]: "Приватний острів за один долар",
        [Locale.Dutch]: "Privé-eiland van één dollar",
        [Locale.French]: "Île privée à un dollar",
        [Locale.German]: "Ein-Dollar-Privatinsel",
        [Locale.Polish]: "Prywatna wyspa za jednego dolara",
        [Locale.SpanishES]: "Isla privada de un dólar",
        [Locale.SpanishLATAM]: "Isla privada de un dólar",
        [Locale.PortugueseBR]: "Ilha privada de um dólar",
        [Locale.Turkish]: "Bir dolarlık özel ada",
        [Locale.Italian]: "Isola privata a un dollaro",
        [Locale.Indonesian]: "Pulau pribadi satu dolar",
        [Locale.Czech]: "Soukromý ostrov za dolar",
        [Locale.Japanese]: "1ドルの無人島",
        [Locale.Korean]: "1달러 무인도",
        [Locale.ChineseCN]: "一美元私人岛屿",
    }),
    topics: [Topic.YouTube],
    types: [Type.ObjectImage, Type.DefaultText],
    width: 621,
    height: 426,
    texts: [],
    images: [{ id: 0, description: "the thumbnail subject" }],
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
                src={images[0]}
                width={621}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ytthumbnail1.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
