import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gtoOnizukaWalkingWithSpray: Template = {
    name: "gtoOnizukaWalkingWithSpray",
    displayName: buildLocales("Onizuka walking with spray", {
        [Locale.Russian]: "Онидзука идет с баллончиком",
        [Locale.Ukrainian]: "Онідзука йде з балончиком",
        [Locale.Dutch]: "Onizuka loopt met spuitbus",
        [Locale.French]: "Onizuka avec une bombe aérosol",
        [Locale.German]: "Onizuka geht mit Spraydose",
        [Locale.Polish]: "Onizuka idący ze sprayem",
        [Locale.SpanishES]: "Onizuka caminando con spray",
        [Locale.SpanishLATAM]: "Onizuka caminando con aerosol",
        [Locale.PortugueseBR]: "Onizuka andando com spray",
        [Locale.Turkish]: "Spreyle yürüyen Onizuka",
        [Locale.Italian]: "Onizuka che cammina con lo spray",
        [Locale.Indonesian]: "Onizuka berjalan membawa spray",
        [Locale.Czech]: "Onizuka kráčející se sprejem",
        [Locale.Japanese]: "スプレーを持って歩く鬼塚",
        [Locale.Korean]: "스프레이를 들고 걷는 오니즈카",
        [Locale.ChineseCN]: "拿着喷漆走路的鬼冢",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GreatTeacherOnizuka],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 516,
    height: 468,
    animationDuration: 3000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gtoOnizukaWalkingWithSpray.gif"
                width={516}
                height={378}
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
