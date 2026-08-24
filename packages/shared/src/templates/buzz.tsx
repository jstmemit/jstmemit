import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const buzz: Template = {
    name: "buzz",
    displayName: buildLocales("Buzz pointing", {
        [Locale.Russian]: "Базз показывает пальцем",
        [Locale.Ukrainian]: "Базз показує пальцем",
        [Locale.Dutch]: "Buzz wijst",
        [Locale.French]: "Buzz qui pointe du doigt",
        [Locale.German]: "Buzz zeigt mit dem Finger",
        [Locale.Polish]: "Buzz wskazuje palcem",
        [Locale.SpanishES]: "Buzz señalando",
        [Locale.SpanishLATAM]: "Buzz señalando",
        [Locale.PortugueseBR]: "Buzz apontando",
        [Locale.Turkish]: "Buzz parmakla işaret ediyor",
        [Locale.Italian]: "Buzz che indica",
        [Locale.Indonesian]: "Buzz menunjuk",
        [Locale.Czech]: "Buzz ukazuje prstem",
        [Locale.Japanese]: "指をさすバズ",
        [Locale.Korean]: "가리키는 버즈",
        [Locale.ChineseCN]: "巴斯光年指着",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.ToyStory],
    types: [Type.FaceImage, Type.TextBottom],
    width: 800,
    height: 544,
    texts: [{ id: 0, description: "the phrase Buzz says", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Buzz's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/buzz.png"
                width={800}
                height={544}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{ position: "absolute", top: 120, left: 300, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
                        fontSize: 44,
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
