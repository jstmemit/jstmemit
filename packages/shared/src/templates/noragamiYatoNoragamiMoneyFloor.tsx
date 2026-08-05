import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const noragamiYatoNoragamiMoneyFloor: Template = {
    name: "noragamiYatoNoragamiMoneyFloor",
    displayName: buildLocales("Yato Noragami money floor", {
        [Locale.Russian]: "Ято Норагами деньги на полу",
        [Locale.Ukrainian]: "Ято Норагамі гроші на підлозі",
        [Locale.Dutch]: "Yato Noragami geld op vloer",
        [Locale.French]: "Yato Noragami argent sur le sol",
        [Locale.German]: "Yato Noragami Geld auf dem Boden",
        [Locale.Polish]: "Yato Noragami pieniądze na podłodze",
        [Locale.SpanishES]: "Yato Noragami dinero en el suelo",
        [Locale.SpanishLATAM]: "Yato Noragami dinero en el piso",
        [Locale.PortugueseBR]: "Yato Noragami dinheiro no chão",
        [Locale.Turkish]: "Yato Noragami yerdeki paralar",
        [Locale.Italian]: "Yato Noragami soldi sul pavimento",
        [Locale.Indonesian]: "Yato Noragami uang di lantai",
        [Locale.Czech]: "Yato Noragami peníze na podlaze",
        [Locale.Japanese]: "夜ト ノラガミ 床の札束",
        [Locale.Korean]: "야토 노라가미 바닥의 돈",
        [Locale.ChineseCN]: "夜斗 野良神 满地是钱",
    }),
    topics: [Topic.Anime, Topic.Noragami],
    types: [Type.DefaultText, Type.FaceImage],
    width: 447,
    height: 447,
    texts: [],
    images: [{ id: 0, description: "Yato`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/noragamiYatoNoragamiMoneyFloor.png"
                width={447}
                height={447}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 195,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-160deg)",
                }}
            />
        </div>
    ),
};
