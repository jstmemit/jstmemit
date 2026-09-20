import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenCrying1: Template = {
    name: "frierenCrying1",
    displayName: buildLocales("Frieren crying 1", {
        [Locale.Russian]: "Фрирен плачет 1",
        [Locale.Ukrainian]: "Фрірен плаче 1",
        [Locale.Dutch]: "Frieren huilt 1",
        [Locale.French]: "Frieren qui pleure 1",
        [Locale.German]: "Frieren weint 1",
        [Locale.Polish]: "Frieren płacze 1",
        [Locale.SpanishES]: "Frieren llorando 1",
        [Locale.SpanishLATAM]: "Frieren llorando 1",
        [Locale.PortugueseBR]: "Frieren chorando 1",
        [Locale.Turkish]: "Frieren ağlıyor 1",
        [Locale.Italian]: "Frieren che piange 1",
        [Locale.Indonesian]: "Frieren menangis 1",
        [Locale.Czech]: "Frieren pláče 1",
        [Locale.Japanese]: "泣くフリーレン 1",
        [Locale.Korean]: "우는 프리렌 1",
        [Locale.ChineseCN]: "芙莉莲哭泣 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextLeftWithBackground],
    width: 748,
    height: 374,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenCrying1.png"
                width={374}
                height={374}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
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
