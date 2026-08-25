import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaHoldingHead: Template = {
    name: "toradoraTaigaHoldingHead",
    displayName: buildLocales("Taiga holding head", {
        [Locale.Russian]: "Тайга держится за голову",
        [Locale.Ukrainian]: "Тайга тримається за голову",
        [Locale.Dutch]: "Taiga houdt hoofd vast",
        [Locale.French]: "Taiga se tenant la tête",
        [Locale.German]: "Taiga hält sich den Kopf",
        [Locale.Polish]: "Taiga trzyma się za głowę",
        [Locale.SpanishES]: "Taiga sosteniéndose la cabeza",
        [Locale.SpanishLATAM]: "Taiga sosteniéndose la cabeza",
        [Locale.PortugueseBR]: "Taiga segurando a cabeça",
        [Locale.Turkish]: "Kafasını tutan Taiga",
        [Locale.Italian]: "Taiga che si tiene la testa",
        [Locale.Indonesian]: "Taiga memegang kepala",
        [Locale.Czech]: "Taiga se drží za hlavu",
        [Locale.Japanese]: "頭を抱える大河",
        [Locale.Korean]: "머리를 감싸쥔 타이가",
        [Locale.ChineseCN]: "大河抱头",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextBottom],
    width: 480,
    height: 384,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaHoldingHead.png"
                width={480}
                height={384}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
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
