import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dnLSmirkFinger: Template = {
    name: "dnLSmirkFinger",
    displayName: buildLocales("L smirk finger", {
        [Locale.Russian]: "L ухмыляется, приложив палец",
        [Locale.Ukrainian]: "L криво посміхається, притулившись пальцем",
        [Locale.Dutch]: "L grijnst met vinger",
        [Locale.French]: "L sourire narquois avec le doigt",
        [Locale.German]: "L grinst mit Finger",
        [Locale.Polish]: "L uśmiecha się z palcem",
        [Locale.SpanishES]: "L con sonrisa de suficiencia y el dedo",
        [Locale.SpanishLATAM]: "L con sonrisa de suficiencia y el dedo",
        [Locale.PortugueseBR]: "L com sorriso irônico e o dedo",
        [Locale.Turkish]: "L parmağıyla alaycı gülümsüyor",
        [Locale.Italian]: "L sorriso sardonico con il dito",
        [Locale.Indonesian]: "L menyeringai dengan jari",
        [Locale.Czech]: "L úšklebek s prstem",
        [Locale.Japanese]: "指を立ててニヤリとするL",
        [Locale.Korean]: "손가락을 대고 미소짓는 L",
        [Locale.ChineseCN]: "L手指抵嘴冷笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextRightWithBackground],
    width: 1472,
    height: 736,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dnLSmirkFinger.png"
                width={736}
                height={736}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
