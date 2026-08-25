import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spidermanPeterParkerWearingGlasses: Template = {
    name: "spidermanPeterParkerWearingGlasses",
    displayName: buildLocales("Peter Parker wearing glasses", {
        [Locale.Russian]: "Питер Паркер надевает очки",
        [Locale.Ukrainian]: "Пітер Паркер одягає окуляри",
        [Locale.Dutch]: "Peter Parker draagt bril",
        [Locale.French]: "Peter Parker mettant ses lunettes",
        [Locale.German]: "Peter Parker setzt Brille auf",
        [Locale.Polish]: "Peter Parker zakłada okulary",
        [Locale.SpanishES]: "Peter Parker poniéndose las gafas",
        [Locale.SpanishLATAM]: "Peter Parker poniéndose los lentes",
        [Locale.PortugueseBR]: "Peter Parker de óculos",
        [Locale.Turkish]: "Gözlük takan Peter Parker",
        [Locale.Italian]: "Peter Parker con gli occhiali",
        [Locale.Indonesian]: "Peter Parker memakai kacamata",
        [Locale.Czech]: "Peter Parker s brýlemi",
        [Locale.Japanese]: "眼鏡をかけるピーター・パーカー",
        [Locale.Korean]: "안경 쓰는 피터 파커",
        [Locale.ChineseCN]: "彼得·帕克戴眼镜",
    }),
    topics: [Topic.SpiderMan, Topic.Movies, Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 1020,
    height: 692,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 20 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 20 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spidermanPeterParkerWearingGlasses.jpg"
                width={1020}
                height={692}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "51%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "51%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
