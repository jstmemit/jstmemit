import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsWhatIsInHomersHead: Template = {
    name: "simpsonsWhatIsInHomersHead",
    displayName: buildLocales("What is in Homer's head", {
        [Locale.Russian]: "Что в голове у Гомера",
        [Locale.Ukrainian]: "Що в голові у Гомера",
        [Locale.Dutch]: "Wat zit er in Homers hoofd",
        [Locale.French]: "Ce qu'il y a dans la tête d'Homer",
        [Locale.German]: "Was in Homers Kopf ist",
        [Locale.Polish]: "Co jest w głowie Homera",
        [Locale.SpanishES]: "Qué hay en la cabeza de Homer",
        [Locale.SpanishLATAM]: "Qué hay en la cabeza de Homero",
        [Locale.PortugueseBR]: "O que está na cabeça do Homer",
        [Locale.Turkish]: "Homer'ın kafasının içinde ne var",
        [Locale.Italian]: "Cosa c'è nella testa di Homer",
        [Locale.Indonesian]: "Apa yang ada di kepala Homer",
        [Locale.Czech]: "Co je v Homerově hlavě",
        [Locale.Japanese]: "ホーマーの頭の中にあるもの",
        [Locale.Korean]: "호머 머릿속에 있는 것",
        [Locale.ChineseCN]: "霍默脑子里在想什么",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottom, Type.ObjectImage],
    width: 525,
    height: 682,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [
        { id: 0, description: "first idea in Homer`s head" },
        { id: 1, description: "second idea in Homer`s head" },
        { id: 2, description: "third idea in Homer`s head" },
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
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 70,
                    right: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 140,
                    right: 240,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 100,
                    right: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsWhatIsInHomersHead.png"
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
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
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
