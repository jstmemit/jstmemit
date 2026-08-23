import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruMaracasDance: Template = {
    name: "hucUmaruMaracasDance",
    displayName: buildLocales("Umaru dancing with maracas", {
        [Locale.Russian]: "Умару танцует с маракасами",
        [Locale.Ukrainian]: "Умару танцює з маракасами",
        [Locale.Dutch]: "Umaru danst met maracas",
        [Locale.French]: "Umaru dansant avec des maracas",
        [Locale.German]: "Umaru tanzt mit Maracas",
        [Locale.Polish]: "Umaru tańcząca z marakasami",
        [Locale.SpanishES]: "Umaru bailando con maracas",
        [Locale.SpanishLATAM]: "Umaru bailando con maracas",
        [Locale.PortugueseBR]: "Umaru dançando com maracas",
        [Locale.Turkish]: "Marakasla dans eden Umaru",
        [Locale.Italian]: "Umaru che balla con le maracas",
        [Locale.Indonesian]: "Umaru menari dengan marakas",
        [Locale.Czech]: "Umaru tančící s rumbakoulemi",
        [Locale.Japanese]: "マラカスで踊るうまる",
        [Locale.Korean]: "마라카스 흔들며 춤추는 우마루",
        [Locale.ChineseCN]: "拿着沙锤跳舞的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 390,
    animationDuration: 1240,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruMaracasDance.gif"
                width={540}
                height={300}
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
