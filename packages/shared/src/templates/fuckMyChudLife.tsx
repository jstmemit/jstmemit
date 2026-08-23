import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const fuckMyChudLife: Template = {
    name: "fuckMyChudLife",
    displayName: buildLocales("Fuck my chud life", {
        [Locale.Russian]: "К черту мою уродскую жизнь",
        [Locale.Ukrainian]: "До біса моє потворне життя",
        [Locale.Dutch]: "Krijg de klere met mijn chud-leven",
        [Locale.French]: "Au diable ma vie de loser",
        [Locale.German]: "Scheiß auf mein Chud-Leben",
        [Locale.Polish]: "Jebać moje przegrane życie",
        [Locale.SpanishES]: "Al diablo mi vida de perdedor",
        [Locale.SpanishLATAM]: "Al diablo mi vida de perdedor",
        [Locale.PortugueseBR]: "Foda-se minha vida de fracassado",
        [Locale.Turkish]: "Lanet olası ezik hayatım",
        [Locale.Italian]: "Al diavolo la mia vita da sfigato",
        [Locale.Indonesian]: "Persetan dengan hidup chud-ku",
        [Locale.Czech]: "Kašlu na svůj loserskej život",
        [Locale.Japanese]: "俺のクソみたいな人生",
        [Locale.Korean]: "내 좆같은 인생",
        [Locale.ChineseCN]: "去他妈的我这失败的人生",
    }),
    topics: [Topic.SocialPost],
    types: [Type.TextPost, Type.ObjectImage, Type.TextBottom],
    width: 776,
    height: 999,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "meal image that would be posted on r/kitchencels" }],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/fuckMyChudLife.png"
                width={776}
                height={999}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img src={images[0]} width={776} height={480} style={{ position: "absolute", top: 520, left: 0 }} />
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
                        fontSize: 55,
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
