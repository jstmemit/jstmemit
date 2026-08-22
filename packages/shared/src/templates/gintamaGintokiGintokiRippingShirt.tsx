import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiGintokiRippingShirt: Template = {
    name: "gintamaGintokiGintokiRippingShirt",
    displayName: buildLocales("Gintoki ripping shirt", {
        [Locale.Russian]: "Гинтоки рвет рубашку",
        [Locale.Ukrainian]: "Гінтокі рве сорочку",
        [Locale.Dutch]: "Gintoki scheurt shirt",
        [Locale.French]: "Gintoki déchire sa chemise",
        [Locale.German]: "Gintoki zerreißt sein Hemd",
        [Locale.Polish]: "Gintoki rozdziera koszulę",
        [Locale.SpanishES]: "Gintoki rompiendo su camisa",
        [Locale.SpanishLATAM]: "Gintoki rompiendo su camisa",
        [Locale.PortugueseBR]: "Gintoki rasgando a camisa",
        [Locale.Turkish]: "Gintoki gömleğini yırtıyor",
        [Locale.Italian]: "Gintoki si strappa la camicia",
        [Locale.Indonesian]: "Gintoki merobek baju",
        [Locale.Czech]: "Gintoki trhá košili",
        [Locale.Japanese]: "シャツを破る銀時",
        [Locale.Korean]: "셔츠를 찢는 긴토키",
        [Locale.ChineseCN]: "银时撕破衬衫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 270,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiGintokiRippingShirt.gif"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
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
