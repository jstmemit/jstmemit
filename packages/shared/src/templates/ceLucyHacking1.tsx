import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ceLucyHacking1: Template = {
    name: "ceLucyHacking1",
    displayName: buildLocales("Lucy hacking 1", {
        [Locale.Russian]: "Люси взламывает 1",
        [Locale.Ukrainian]: "Люсі зламує 1",
        [Locale.Dutch]: "Lucy hackt 1",
        [Locale.French]: "Lucy en train de hacker 1",
        [Locale.German]: "Lucy hackt 1",
        [Locale.Polish]: "Lucy hakuje 1",
        [Locale.SpanishES]: "Lucy hackeando 1",
        [Locale.SpanishLATAM]: "Lucy hackeando 1",
        [Locale.PortugueseBR]: "Lucy hackeando 1",
        [Locale.Turkish]: "Lucy hackliyor 1",
        [Locale.Italian]: "Lucy che hacka 1",
        [Locale.Indonesian]: "Lucy meretas 1",
        [Locale.Czech]: "Lucy hackuje 1",
        [Locale.Japanese]: "ハッキングするルーシー 1",
        [Locale.Korean]: "해킹하는 루시 1",
        [Locale.ChineseCN]: "露西黑入系统 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.DefaultText, Type.AvatarImage],
    width: 640,
    height: 572,
    texts: [],
    images: [{ id: 0, description: "user avatar" }],
    element: ({ images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceLucyHacking.png"
                width={640}
                height={462}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 300,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                    filter: "sepia(1) hue-rotate(330deg) saturate(3)",
                    opacity: 0.6,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    I am rapidly uncovering your location
                </div>
            </div>
        </div>
    ),
};
