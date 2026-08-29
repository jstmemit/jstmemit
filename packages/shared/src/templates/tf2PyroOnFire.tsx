import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tf2PyroOnFire: Template = {
    name: "tf2PyroOnFire",
    displayName: buildLocales("Pyro on fire", {
        [Locale.Russian]: "Пиро в огне",
        [Locale.Ukrainian]: "Піро у вогні",
        [Locale.Dutch]: "Pyro staat in brand",
        [Locale.French]: "Pyro en feu",
        [Locale.German]: "Pyro in Flammen",
        [Locale.Polish]: "Pyro w ogniu",
        [Locale.SpanishES]: "Pyro en llamas",
        [Locale.SpanishLATAM]: "Pyro en llamas",
        [Locale.PortugueseBR]: "Pyro em chamas",
        [Locale.Turkish]: "Pyro yanıyor",
        [Locale.Italian]: "Pyro in fiamme",
        [Locale.Indonesian]: "Pyro terbakar",
        [Locale.Czech]: "Pyro v plamenech",
        [Locale.Japanese]: "燃えているパイロ",
        [Locale.Korean]: "불타는 파이로",
        [Locale.ChineseCN]: "着火的火焰兵",
    }),
    topics: [Topic.Reaction, Topic.Games, Topic.TeamFortress2],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 480,
    animationDuration: 3480,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tf2PyroOnFire.gif"
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
                    height: "120px",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
