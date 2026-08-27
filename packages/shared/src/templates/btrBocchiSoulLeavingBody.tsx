import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiSoulLeavingBody: Template = {
    name: "btrBocchiSoulLeavingBody",
    displayName: buildLocales("Bocchi soul leaving body", {
        [Locale.Russian]: "Душа Бокки покидает тело",
        [Locale.Ukrainian]: "Душа Боккі покидає тіло",
        [Locale.Dutch]: "Bocchi's ziel verlaat haar lichaam",
        [Locale.French]: "L'âme de Bocchi quitte son corps",
        [Locale.German]: "Bocchis Seele verlässt den Körper",
        [Locale.Polish]: "Dusza Bocchi opuszcza ciało",
        [Locale.SpanishES]: "El alma de Bocchi abandona su cuerpo",
        [Locale.SpanishLATAM]: "El alma de Bocchi abandona su cuerpo",
        [Locale.PortugueseBR]: "A alma de Bocchi deixa o corpo",
        [Locale.Turkish]: "Bocchi'nin ruhu bedeninden çıkıyor",
        [Locale.Italian]: "L'anima di Bocchi lascia il corpo",
        [Locale.Indonesian]: "Jiwa Bocchi keluar dari tubuhnya",
        [Locale.Czech]: "Bocchina duše opouští tělo",
        [Locale.Japanese]: "魂が抜けるぼっち",
        [Locale.Korean]: "영혼이 빠져나가는 봇치",
        [Locale.ChineseCN]: "波奇灵魂出窍",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground],
    width: 1280,
    height: 850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiSoulLeavingBody.png"
                width={1280}
                height={720}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "130px",
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
