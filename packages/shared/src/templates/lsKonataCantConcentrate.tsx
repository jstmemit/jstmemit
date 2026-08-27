import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataCantConcentrate: Template = {
    name: "lsKonataCantConcentrate",
    displayName: buildLocales("Konata can't concentrate", {
        [Locale.Russian]: "Коната не может сосредоточиться",
        [Locale.Ukrainian]: "Коната не може зосередитися",
        [Locale.Dutch]: "Konata kan zich niet concentreren",
        [Locale.French]: "Konata n'arrive pas à se concentrer",
        [Locale.German]: "Konata kann sich nicht konzentrieren",
        [Locale.Polish]: "Konata nie może się skupić",
        [Locale.SpanishES]: "Konata no puede concentrarse",
        [Locale.SpanishLATAM]: "Konata no puede concentrarse",
        [Locale.PortugueseBR]: "Konata não consegue se concentrar",
        [Locale.Turkish]: "Odaklanamayan Konata",
        [Locale.Italian]: "Konata non riesce a concentrarsi",
        [Locale.Indonesian]: "Konata tidak bisa berkonsentrasi",
        [Locale.Czech]: "Konata se nemůže soustředit",
        [Locale.Japanese]: "集中できないこなた",
        [Locale.Korean]: "집중하지 못하는 코나타",
        [Locale.ChineseCN]: "无法集中的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 374,
    animationDuration: 4200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataCantConcentrate.gif"
                width={500}
                height={284}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
