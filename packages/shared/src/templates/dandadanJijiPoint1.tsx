import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanJijiPoint1: Template = {
    name: "dandadanJijiPoint1",
    displayName: buildLocales("Jiji pointing 1", {
        [Locale.Russian]: "Дзидзи показывает пальцем 1",
        [Locale.Ukrainian]: "Дзідзі показує пальцем 1",
        [Locale.Dutch]: "Jiji wijst 1",
        [Locale.French]: "Jiji qui pointe du doigt 1",
        [Locale.German]: "Jiji zeigt 1",
        [Locale.Polish]: "Jiji wskazuje 1",
        [Locale.SpanishES]: "Jiji señalando 1",
        [Locale.SpanishLATAM]: "Jiji señalando 1",
        [Locale.PortugueseBR]: "Jiji apontando 1",
        [Locale.Turkish]: "Jiji işaret ediyor 1",
        [Locale.Italian]: "Jiji che indica 1",
        [Locale.Indonesian]: "Jiji menunjuk 1",
        [Locale.Czech]: "Jiji ukazuje 1",
        [Locale.Japanese]: "指を差すジジ 1",
        [Locale.Korean]: "손가락으로 가리키는 지지 1",
        [Locale.ChineseCN]: "吉吉指着 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanJijiPoint1.png"
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
                    height: "100px",
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
