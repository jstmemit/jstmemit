import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenBlowingKissChuu: Template = {
    name: "frierenBlowingKissChuu",
    displayName: buildLocales("Frieren blowing kiss chuu", {
        [Locale.Russian]: "Фрирен посылает воздушный поцелуй чуу",
        [Locale.Ukrainian]: "Фрірен посилає повітряний поцілунок чуу",
        [Locale.Dutch]: "Frieren blaast een kus chuu",
        [Locale.French]: "Frieren envoie un baiser chuu",
        [Locale.German]: "Frieren wirft einen Kuss chuu",
        [Locale.Polish]: "Frieren przesyła całusa chuu",
        [Locale.SpanishES]: "Frieren lanzando un beso chuu",
        [Locale.SpanishLATAM]: "Frieren lanzando un beso chuu",
        [Locale.PortugueseBR]: "Frieren mandando beijo chuu",
        [Locale.Turkish]: "Frieren öpücük gönderiyor chuu",
        [Locale.Italian]: "Frieren manda un bacio chuu",
        [Locale.Indonesian]: "Frieren meniup ciuman chuu",
        [Locale.Czech]: "Frieren posílá vzdušnou pusu chuu",
        [Locale.Japanese]: "投げキッスをするフリーレン チュッ",
        [Locale.Korean]: "손키스 츄 날리는 프리렌",
        [Locale.ChineseCN]: "芙莉莲飞吻 chuu",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextBottom, Type.FaceImage],
    width: 794,
    height: 1024,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Frieren's face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenBlowingKissChuu.png"
                width={794}
                height={1024}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 110,
                    left: 280,
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
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
