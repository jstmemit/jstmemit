import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const cowLookingIntoOcean: Template = {
    name: "cowLookingIntoOcean",
    displayName: buildLocales("Horse looking into ocean", {
        [Locale.Russian]: "Лошадь смотрит на океан",
        [Locale.Ukrainian]: "Кінь дивиться на океан",
        [Locale.Dutch]: "Paard kijkt naar de oceaan",
        [Locale.French]: "Cheval regardant l'océan",
        [Locale.German]: "Pferd blickt auf den Ozean",
        [Locale.Polish]: "Koń patrzy na ocean",
        [Locale.SpanishES]: "Caballo mirando al océano",
        [Locale.SpanishLATAM]: "Caballo mirando al océano",
        [Locale.PortugueseBR]: "Cavalo olhando para o oceano",
        [Locale.Turkish]: "Okyanusa bakan at",
        [Locale.Italian]: "Cavallo che guarda l'oceano",
        [Locale.Indonesian]: "Kuda memandang lautan",
        [Locale.Czech]: "Kůň se dívá na oceán",
        [Locale.Japanese]: "海を見つめる馬",
        [Locale.Korean]: "바다를 바라보는 말",
        [Locale.ChineseCN]: "马凝望大海",
    }),
    topics: [Topic.Animals],
    types: [Type.TextBottom, Type.FaceImage],
    width: 403,
    height: 352,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "horse face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/cowlookingintoocean.png"
                width={403}
                height={352}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    right: "38%",
                    top: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
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
                        fontFamily: "Comic Sans MS",
                        fontSize: 26,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
