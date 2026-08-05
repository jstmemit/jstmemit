import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const iAdopted100Dogs: Template = {
    name: "iAdopted100Dogs",
    displayName: buildLocales("I adopted 100 dogs", {
        [Locale.Russian]: "Я приютил 100 собак",
        [Locale.Ukrainian]: "Я дав притулок 100 собакам",
        [Locale.Dutch]: "Ik heb 100 honden geadopteerd",
        [Locale.French]: "J'ai adopté 100 chiens",
        [Locale.German]: "Ich habe 100 Hunde adoptiert",
        [Locale.Polish]: "Adoptowałem 100 psów",
        [Locale.SpanishES]: "Adopté 100 perros",
        [Locale.SpanishLATAM]: "Adopté 100 perros",
        [Locale.PortugueseBR]: "Eu adotei 100 cachorros",
        [Locale.Turkish]: "100 köpek sahiplendim",
        [Locale.Italian]: "Ho adottato 100 cani",
        [Locale.Indonesian]: "Saya mengadopsi 100 anjing",
        [Locale.Czech]: "Adoptoval jsem 100 psů",
        [Locale.Japanese]: "100匹の犬を保護しました",
        [Locale.Korean]: "100마리의 유기견을 입양했습니다",
        [Locale.ChineseCN]: "我收养了100只狗",
    }),
    topics: [Topic.YouTube],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 621,
    height: 426,
    texts: [],
    images: [{ id: 0, description: "the thumbnail subject" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ytthumbnail2.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
