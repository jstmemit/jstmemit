import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaHittingIshigami: Template = {
    name: "kaguyasamaChikaHittingIshigami",
    displayName: buildLocales("Chika hitting Ishigami", {
        [Locale.Russian]: "Чика бьет Исигами",
        [Locale.Ukrainian]: "Чіка б'є Ішігамі",
        [Locale.Dutch]: "Chika slaat Ishigami",
        [Locale.French]: "Chika frappe Ishigami",
        [Locale.German]: "Chika schlägt Ishigami",
        [Locale.Polish]: "Chika uderza Ishigamiego",
        [Locale.SpanishES]: "Chika golpeando a Ishigami",
        [Locale.SpanishLATAM]: "Chika golpeando a Ishigami",
        [Locale.PortugueseBR]: "Chika batendo no Ishigami",
        [Locale.Turkish]: "Chika Ishigami'ye vuruyor",
        [Locale.Italian]: "Chika picchia Ishigami",
        [Locale.Indonesian]: "Chika memukul Ishigami",
        [Locale.Czech]: "Chika bije Išigamiho",
        [Locale.Japanese]: "石上を叩くチカ",
        [Locale.Korean]: "이시가미를 때리는 치카",
        [Locale.ChineseCN]: "千花打石上",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 538,
    height: 392,
    animationDuration: 680,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaHittingIshigami.gif"
                width={538}
                height={302}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
