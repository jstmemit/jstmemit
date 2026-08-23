import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiPointingUp: Template = {
    name: "gintamaGintokiPointingUp",
    displayName: buildLocales("Gintoki pointing up", {
        [Locale.Russian]: "Гинтоки указывает вверх",
        [Locale.Ukrainian]: "Гінтокі вказує вгору",
        [Locale.Dutch]: "Gintoki wijst omhoog",
        [Locale.French]: "Gintoki pointe vers le haut",
        [Locale.German]: "Gintoki zeigt nach oben",
        [Locale.Polish]: "Gintoki wskazuje w górę",
        [Locale.SpanishES]: "Gintoki señalando hacia arriba",
        [Locale.SpanishLATAM]: "Gintoki señalando hacia arriba",
        [Locale.PortugueseBR]: "Gintoki apontando para cima",
        [Locale.Turkish]: "Gintoki yukarıyı işaret ediyor",
        [Locale.Italian]: "Gintoki punta verso l'alto",
        [Locale.Indonesian]: "Gintoki menunjuk ke atas",
        [Locale.Czech]: "Gintoki ukazuje nahoru",
        [Locale.Japanese]: "上を指さす銀時",
        [Locale.Korean]: "위 가리키는 긴토키",
        [Locale.ChineseCN]: "银时向上指",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 500,
    height: 391,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Gintoki's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiPointingUp.png"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: 150,
                    left: 195,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-20deg)",
                }}
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
