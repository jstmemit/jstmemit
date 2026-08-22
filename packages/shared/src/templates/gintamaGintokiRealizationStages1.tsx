import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiRealizationStages1: Template = {
    name: "gintamaGintokiRealizationStages1",
    displayName: buildLocales("Gintoki realization stages 1", {
        [Locale.Russian]: "Стадии осознания Гинтоки 1",
        [Locale.Ukrainian]: "Стадії усвідомлення Гінтокі 1",
        [Locale.Dutch]: "Gintoki realisatie stadia 1",
        [Locale.French]: "Étapes de réalisation de Gintoki 1",
        [Locale.German]: "Gintokis Phasen der Erkenntnis 1",
        [Locale.Polish]: "Etapy uświadamiania sobie przez Gintokiego 1",
        [Locale.SpanishES]: "Fases de realización de Gintoki 1",
        [Locale.SpanishLATAM]: "Fases de realización de Gintoki 1",
        [Locale.PortugueseBR]: "Estágios de realização do Gintoki 1",
        [Locale.Turkish]: "Gintoki idrak aşamaları 1",
        [Locale.Italian]: "Fasi di realizzazione di Gintoki 1",
        [Locale.Indonesian]: "Tahap kesadaran Gintoki 1",
        [Locale.Czech]: "Fáze uvědomění Gintokiho 1",
        [Locale.Japanese]: "銀時の気づきの段階 1",
        [Locale.Korean]: "긴토키 깨달음의 단계 1",
        [Locale.ChineseCN]: "银时认知的几个阶段 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    animationDuration: 1900,
    width: 640,
    height: 470,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiRealizationStages1.gif"
                width={640}
                height={360}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
