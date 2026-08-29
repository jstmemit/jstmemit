import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsWhatIsInHomersHead1: Template = {
    name: "simpsonsWhatIsInHomersHead1",
    displayName: buildLocales("What is in Homer's head 1", {
        [Locale.Russian]: "Что в голове у Гомера 1",
        [Locale.Ukrainian]: "Що в голові у Гомера 1",
        [Locale.Dutch]: "Wat zit er in Homers hoofd 1",
        [Locale.French]: "Ce qu'il y a dans la tête d'Homer 1",
        [Locale.German]: "Was in Homers Kopf ist 1",
        [Locale.Polish]: "Co jest w głowie Homera 1",
        [Locale.SpanishES]: "Qué hay en la cabeza de Homer 1",
        [Locale.SpanishLATAM]: "Qué hay en la cabeza de Homero 1",
        [Locale.PortugueseBR]: "O que está na cabeça do Homer 1",
        [Locale.Turkish]: "Homer'ın kafasının içinde ne var 1",
        [Locale.Italian]: "Cosa c'è nella testa di Homer 1",
        [Locale.Indonesian]: "Apa yang ada di kepala Homer 1",
        [Locale.Czech]: "Co je v Homerově hlavě 1",
        [Locale.Japanese]: "ホーマーの頭の中にあるもの 1",
        [Locale.Korean]: "호머 머릿속에 있는 것 1",
        [Locale.ChineseCN]: "霍默脑子里在想什么 1",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottom, Type.ObjectImage],
    width: 525,
    height: 682,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "first idea in Homer`s head" },
        { id: 1, description: "second idea in Homer`s head" },
    ],
    element: ({ texts, images, font }: TemplateProps) => (
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
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 100,
                    right: 220,
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 70,
                    right: 20,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsWhatIsInHomersHead.png"
                width={525}
                height={682}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
