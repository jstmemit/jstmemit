import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const theyAllGoIntoSquareHole: Template = {
    name: "theyAllGoIntoSquareHole",
    displayName: buildLocales("They all go into square hole", {
        [Locale.Russian]: "Они все идут в квадратное отверстие",
        [Locale.Ukrainian]: "Вони всі йдуть у квадратний отвір",
        [Locale.Dutch]: "Ze gaan allemaal in het vierkante gat",
        [Locale.French]: "Ils vont tous dans le trou carré",
        [Locale.German]: "Sie kommen alle in das quadratische Loch",
        [Locale.Polish]: "Wszystkie idą do kwadratowego otworu",
        [Locale.SpanishES]: "Todos van al agujero cuadrado",
        [Locale.SpanishLATAM]: "Todos van al agujero cuadrado",
        [Locale.PortugueseBR]: "Todos vão para o buraco quadrado",
        [Locale.Turkish]: "Hepsi kare deliğe giriyor",
        [Locale.Italian]: "Vanno tutti nel buco quadrato",
        [Locale.Indonesian]: "Semuanya masuk ke lubang persegi",
        [Locale.Czech]: "Všechny patří do čtvercového otvoru",
        [Locale.Japanese]: "全部四角い穴に入る",
        [Locale.Korean]: "다 네모난 구멍에 들어가네",
        [Locale.ChineseCN]: "它们都进方形孔",
    }),
    topics: [Topic.Misc],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 854,
    height: 1042,
    texts: [],
    images: [{ id: 0, description: "People who were banned by the UK government" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/theyAllGoIntoSquareHole.png"
                width={854}
                height={1042}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 265,
                    left: 400,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 100,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    bottom: 85,
                    right: 100,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 3,
                }}
            />
        </div>
    ),
};
