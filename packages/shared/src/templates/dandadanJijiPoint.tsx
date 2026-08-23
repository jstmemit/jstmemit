import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dandadanJijiPoint: Template = {
    name: "dandadanJijiPoint",
    displayName: buildLocales("Jiji pointing", {
        [Locale.Russian]: "Дзидзи показывает пальцем",
        [Locale.Ukrainian]: "Дзідзі показує пальцем",
        [Locale.Dutch]: "Jiji wijst",
        [Locale.French]: "Jiji qui pointe du doigt",
        [Locale.German]: "Jiji zeigt",
        [Locale.Polish]: "Jiji wskazuje",
        [Locale.SpanishES]: "Jiji señalando",
        [Locale.SpanishLATAM]: "Jiji señalando",
        [Locale.PortugueseBR]: "Jiji apontando",
        [Locale.Turkish]: "Jiji işaret ediyor",
        [Locale.Italian]: "Jiji che indica",
        [Locale.Indonesian]: "Jiji menunjuk",
        [Locale.Czech]: "Jiji ukazuje",
        [Locale.Japanese]: "指を差すジジ",
        [Locale.Korean]: "손가락으로 가리키는 지지",
        [Locale.ChineseCN]: "吉吉指着",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 371,
    animationDuration: 740,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanJijiPoint.gif"
                width={498}
                height={281}
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
