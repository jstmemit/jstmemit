import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const policeCarCrash: Template = {
    name: "policeCarCrash",
    displayName: buildLocales("Police car crash", {
        [Locale.Russian]: "Авария полицейской машины",
        [Locale.Ukrainian]: "Аварія поліцейської машини",
        [Locale.Dutch]: "Crash van politieauto",
        [Locale.French]: "Accident de voiture de police",
        [Locale.German]: "Polizeiauto-Unfall",
        [Locale.Polish]: "Wypadek radiowozu",
        [Locale.SpanishES]: "Choque de coche de policía",
        [Locale.SpanishLATAM]: "Choque de patrulla",
        [Locale.PortugueseBR]: "Batida de viatura",
        [Locale.Turkish]: "Polis arabası kazası",
        [Locale.Italian]: "Schianto di un'auto della polizia",
        [Locale.Indonesian]: "Tabrakan mobil polisi",
        [Locale.Czech]: "Nehoda policejního auta",
        [Locale.Japanese]: "パトカーの衝突",
        [Locale.Korean]: "경찰차 충돌",
        [Locale.ChineseCN]: "警车相撞",
    }),
    topics: [Topic.Destruction],
    types: [Type.BackgroundImage, Type.Animated],
    width: 640,
    height: 360,
    animationDuration: 4600,
    texts: [],
    images: [{ id: 0, description: "background image" }],
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
                src={images[0]}
                width={640}
                height={360}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/policeCarCrash.gif"
                width={640}
                height={360}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
        </div>
    ),
};
