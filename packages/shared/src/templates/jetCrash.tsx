import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jetCrash: Template = {
    name: "jetCrash",
    displayName: buildLocales("Jet crash", {
        [Locale.Russian]: "Крушение самолета",
        [Locale.Ukrainian]: "Падіння літака",
        [Locale.Dutch]: "Vliegtuigcrash",
        [Locale.French]: "Crash d'avion",
        [Locale.German]: "Flugzeugabsturz",
        [Locale.Polish]: "Katastrofa samolotu",
        [Locale.SpanishES]: "Choque de avión",
        [Locale.SpanishLATAM]: "Choque de avión",
        [Locale.PortugueseBR]: "Queda de avião",
        [Locale.Turkish]: "Uçak kazası",
        [Locale.Italian]: "Schianto aereo",
        [Locale.Indonesian]: "Pesawat jatuh",
        [Locale.Czech]: "Pád letadla",
        [Locale.Japanese]: "飛行機の墜落",
        [Locale.Korean]: "비행기 추락",
        [Locale.ChineseCN]: "飞机坠毁",
    }),
    topics: [Topic.Destruction],
    types: [Type.BackgroundImage, Type.Animated],
    width: 1280,
    height: 720,
    animationDuration: 3400,
    texts: [],
    images: [{ id: 0, description: "background image" }],
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
                width={1280}
                height={720}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/jetCrash.gif"
                width={1280}
                height={720}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
        </div>
    ),
};
