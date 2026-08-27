import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaDarknessSwingingSword: Template = {
    name: "konosubaDarknessSwingingSword",
    displayName: buildLocales("Darkness swinging her sword", {
        [Locale.Russian]: "Даркнесс размахивает мечом",
        [Locale.Ukrainian]: "Даркнесс розмахує мечем",
        [Locale.Dutch]: "Darkness zwaait met haar zwaard",
        [Locale.French]: "Darkness balançant son épée",
        [Locale.German]: "Darkness schwingt ihr Schwert",
        [Locale.Polish]: "Darkness machająca mieczem",
        [Locale.SpanishES]: "Darkness blandiendo su espada",
        [Locale.SpanishLATAM]: "Darkness blandiendo su espada",
        [Locale.PortugueseBR]: "Darkness balançando a espada",
        [Locale.Turkish]: "Kılıcını savuran Darkness",
        [Locale.Italian]: "Darkness che brandisce la spada",
        [Locale.Indonesian]: "Darkness mengayunkan pedang",
        [Locale.Czech]: "Darkness máchající mečem",
        [Locale.Japanese]: "剣を振り回すダクネス",
        [Locale.Korean]: "검을 휘두르는 다크니스",
        [Locale.ChineseCN]: "挥剑的达克妮斯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 2520,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaDarknessSwingingSword.gif"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, right: 0 }}
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
