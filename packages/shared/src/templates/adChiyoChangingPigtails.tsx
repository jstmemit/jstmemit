import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adChiyoChangingPigtails: Template = {
    name: "adChiyoChangingPigtails",
    displayName: buildLocales("Chiyo changing pigtails", {
        [Locale.Russian]: "Чиё меняет хвостики",
        [Locale.Ukrainian]: "Чійо міняє хвостики",
        [Locale.Dutch]: "Chiyo verandert haar staartjes",
        [Locale.French]: "Chiyo change de couettes",
        [Locale.German]: "Chiyo wechselt ihre Zöpfe",
        [Locale.Polish]: "Chiyo zmienia kucyki",
        [Locale.SpanishES]: "Chiyo cambiando sus coletas",
        [Locale.SpanishLATAM]: "Chiyo cambiando sus coletas",
        [Locale.PortugueseBR]: "Chiyo mudando as marias-chiquinhas",
        [Locale.Turkish]: "Chiyo saç şeklini değiştiriyor",
        [Locale.Italian]: "Chiyo cambia i codini",
        [Locale.Indonesian]: "Chiyo mengganti kuncirnya",
        [Locale.Czech]: "Chiyo si mění culíky",
        [Locale.Japanese]: "ちよ おさげを変える",
        [Locale.Korean]: "치요 양갈래 바꾸기",
        [Locale.ChineseCN]: "千代换双马尾",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 427,
    animationDuration: 8040,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adChiyoChangingPigtails.gif"
                width={500}
                height={337}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
                        fontFamily: font,
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
