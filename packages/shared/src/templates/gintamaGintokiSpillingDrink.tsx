import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiSpillingDrink: Template = {
    name: "gintamaGintokiSpillingDrink",
    displayName: buildLocales("Gintoki spilling drink", {
        [Locale.Russian]: "Гинтоки проливает напиток",
        [Locale.Ukrainian]: "Гінтокі проливає напій",
        [Locale.Dutch]: "Gintoki morst drankje",
        [Locale.French]: "Gintoki renverse sa boisson",
        [Locale.German]: "Gintoki verschüttet sein Getränk",
        [Locale.Polish]: "Gintoki rozlewa napój",
        [Locale.SpanishES]: "Gintoki derrama la bebida",
        [Locale.SpanishLATAM]: "Gintoki derrama la bebida",
        [Locale.PortugueseBR]: "Gintoki derramando a bebida",
        [Locale.Turkish]: "Gintoki içeceğini döküyor",
        [Locale.Italian]: "Gintoki rovescia la bevanda",
        [Locale.Indonesian]: "Gintoki menumpahkan minuman",
        [Locale.Czech]: "Gintoki rozlévá pití",
        [Locale.Japanese]: "飲み物をこぼす銀時",
        [Locale.Korean]: "음료를 쏟는 긴토키",
        [Locale.ChineseCN]: "银时洒出饮料",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 2800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiSpillingDrink.gif"
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
