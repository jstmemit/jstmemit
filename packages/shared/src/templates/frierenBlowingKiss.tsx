import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenBlowingKiss: Template = {
    name: "frierenBlowingKiss",
    displayName: buildLocales("Frieren blowing kiss", {
        [Locale.Russian]: "Фрирен посылает воздушный поцелуй",
        [Locale.Ukrainian]: "Фрірен посилає повітряний поцілунок",
        [Locale.Dutch]: "Frieren blaast een kus",
        [Locale.French]: "Frieren envoie un baiser",
        [Locale.German]: "Frieren wirft einen Kuss",
        [Locale.Polish]: "Frieren przesyła całusa",
        [Locale.SpanishES]: "Frieren lanzando un beso",
        [Locale.SpanishLATAM]: "Frieren lanzando un beso",
        [Locale.PortugueseBR]: "Frieren mandando beijo",
        [Locale.Turkish]: "Frieren öpücük gönderiyor",
        [Locale.Italian]: "Frieren manda un bacio",
        [Locale.Indonesian]: "Frieren meniup ciuman",
        [Locale.Czech]: "Frieren posílá vzdušnou pusu",
        [Locale.Japanese]: "投げキッスをするフリーレン",
        [Locale.Korean]: "손키스 날리는 프리렌",
        [Locale.ChineseCN]: "芙莉莲飞吻",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextBottom, Type.FaceImage],
    width: 447,
    height: 447,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "Frieren's face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenBlowingKiss.png"
                width={447}
                height={447}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 60,
                    left: 80,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
