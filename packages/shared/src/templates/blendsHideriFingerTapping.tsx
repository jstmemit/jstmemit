import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsHideriFingerTapping: Template = {
    name: "blendsHideriFingerTapping",
    displayName: buildLocales("Hideri finger tapping", {
        [Locale.Russian]: "Хидери постукивает пальцем",
        [Locale.Ukrainian]: "Хідері постукує пальцем",
        [Locale.Dutch]: "Hideri tikt met haar vinger",
        [Locale.French]: "Hideri qui tapote du doigt",
        [Locale.German]: "Hideri tippt mit dem Finger",
        [Locale.Polish]: "Hideri stuka palcem",
        [Locale.SpanishES]: "Hideri tamborileando con el dedo",
        [Locale.SpanishLATAM]: "Hideri tamborileando el dedo",
        [Locale.PortugueseBR]: "Hideri batendo o dedo",
        [Locale.Turkish]: "Hideri parmağıyla vuruyor",
        [Locale.Italian]: "Hideri che tamburella con il dito",
        [Locale.Indonesian]: "Hideri mengetuk jari",
        [Locale.Czech]: "Hideri ťuká prstem",
        [Locale.Japanese]: "ヒデリの指タップ",
        [Locale.Korean]: "히데리 손가락 톡톡",
        [Locale.ChineseCN]: "绯多莉手指轻敲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.ObjectImage, Type.FaceImage],
    width: 801,
    height: 765,
    texts: [],
    images: [
        { id: 0, description: "What Hideri holding in hands" },
        { id: 1, description: "Hideri`s face" },
    ],
    element: ({ images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriFingerTapping.png"
                width={801}
                height={765}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{
                    position: "absolute",
                    bottom: 130,
                    left: 300,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-25deg)",
                }}
            />
            <img
                src={images[1]}
                width={280}
                height={280}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 255,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-25deg)",
                }}
            />
        </div>
    ),
};
