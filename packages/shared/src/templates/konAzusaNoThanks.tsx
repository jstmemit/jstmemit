import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konAzusaNoThanks: Template = {
    name: "konAzusaNoThanks",
    displayName: buildLocales("Azusa no thanks", {
        [Locale.Russian]: "Азуса: нет, спасибо",
        [Locale.Ukrainian]: "Азуса: ні, дякую",
        [Locale.Dutch]: "Azusa nee bedankt",
        [Locale.French]: "Azusa non merci",
        [Locale.German]: "Azusa nein danke",
        [Locale.Polish]: "Azusa nie dziękuję",
        [Locale.SpanishES]: "Azusa no gracias",
        [Locale.SpanishLATAM]: "Azusa no gracias",
        [Locale.PortugueseBR]: "Azusa não, obrigado",
        [Locale.Turkish]: "Azusa hayır teşekkürler",
        [Locale.Italian]: "Azusa no grazie",
        [Locale.Indonesian]: "Azusa tidak terima kasih",
        [Locale.Czech]: "Azusa ne díky",
        [Locale.Japanese]: "あずにゃん 結構です",
        [Locale.Korean]: "아즈사 사양할게요",
        [Locale.ChineseCN]: "梓 丑拒",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.DefaultText, Type.FaceImage],
    width: 860,
    height: 550,
    texts: [],
    images: [{ id: 0, description: "Kaguya's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konAzusaNoThanks.png"
                width={860}
                height={550}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 90,
                    right: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
