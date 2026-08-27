import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tf2PyroOnFire1: Template = {
    name: "tf2PyroOnFire1",
    displayName: buildLocales("Pyro on fire 1", {
        [Locale.Russian]: "Пиро в огне 1",
        [Locale.Ukrainian]: "Піро у вогні 1",
        [Locale.Dutch]: "Pyro staat in brand 1",
        [Locale.French]: "Pyro en feu 1",
        [Locale.German]: "Pyro in Flammen 1",
        [Locale.Polish]: "Pyro w ogniu 1",
        [Locale.SpanishES]: "Pyro en llamas 1",
        [Locale.SpanishLATAM]: "Pyro en llamas 1",
        [Locale.PortugueseBR]: "Pyro em chamas 1",
        [Locale.Turkish]: "Pyro yanıyor 1",
        [Locale.Italian]: "Pyro in fiamme 1",
        [Locale.Indonesian]: "Pyro terbakar 1",
        [Locale.Czech]: "Pyro v plamenech 1",
        [Locale.Japanese]: "燃えているパイロ 1",
        [Locale.Korean]: "불타는 파이로 1",
        [Locale.ChineseCN]: "着火的火焰兵 1",
    }),
    topics: [Topic.Reaction, Topic.Games, Topic.TeamFortress2],
    types: [Type.TextTopWithBackground, Type.Animated, Type.FaceImage],
    width: 640,
    height: 450,
    animationDuration: 3480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Pyro`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tf2PyroOnFire.gif"
                width={640}
                height={360}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 100,
                    right: 260,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
