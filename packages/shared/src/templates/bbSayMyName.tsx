import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const bbSayMyName: Template = {
    name: "bbSayMyName",
    displayName: buildLocales("Say my name", {
        [Locale.Russian]: "Назови мое имя",
        [Locale.Ukrainian]: "Назви моє ім'я",
        [Locale.Dutch]: "Zeg mijn naam",
        [Locale.French]: "Dis mon nom",
        [Locale.German]: "Sag meinen Namen",
        [Locale.Polish]: "Wypowiedz moje imię",
        [Locale.SpanishES]: "Di mi nombre",
        [Locale.SpanishLATAM]: "Di mi nombre",
        [Locale.PortugueseBR]: "Diga meu nome",
        [Locale.Turkish]: "Adımı söyle",
        [Locale.Italian]: "Di' il mio nome",
        [Locale.Indonesian]: "Sebutkan nama saya",
        [Locale.Czech]: "Řekni moje jméno",
        [Locale.Japanese]: "俺の名前を言え",
        [Locale.Korean]: "내 이름을 말해봐",
        [Locale.ChineseCN]: "说出我的名字",
    }),
    topics: [Topic.BreakingBad, Topic.Movies],
    types: [Type.FaceImage, Type.DefaultText],
    width: 1280,
    height: 720,
    texts: [],
    images: [{ id: 0, description: "Walter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bbSayMyName.jpg"
                width={1280}
                height={720}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={650}
                height={650}
                style={{
                    position: "absolute",
                    top: -70,
                    right: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
