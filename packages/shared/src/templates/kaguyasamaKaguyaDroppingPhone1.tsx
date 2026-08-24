import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaDroppingPhone1: Template = {
    name: "kaguyasamaKaguyaDroppingPhone1",
    displayName: buildLocales("Kaguya dropping phone 1", {
        [Locale.Russian]: "Кагуя роняет телефон 1",
        [Locale.Ukrainian]: "Кагуя впускає телефон 1",
        [Locale.Dutch]: "Kaguya laat telefoon vallen 1",
        [Locale.French]: "Kaguya fait tomber son téléphone 1",
        [Locale.German]: "Kaguya lässt Handy fallen 1",
        [Locale.Polish]: "Kaguya upuszcza telefon 1",
        [Locale.SpanishES]: "Kaguya dejando caer el teléfono 1",
        [Locale.SpanishLATAM]: "Kaguya dejando caer el teléfono 1",
        [Locale.PortugueseBR]: "Kaguya derrubando o telefone 1",
        [Locale.Turkish]: "Kaguya telefonunu düşürüyor 1",
        [Locale.Italian]: "Kaguya fa cadere il telefono 1",
        [Locale.Indonesian]: "Kaguya menjatuhkan ponsel 1",
        [Locale.Czech]: "Kaguya upouští telefon 1",
        [Locale.Japanese]: "スマホを落とすかぐや 1",
        [Locale.Korean]: "핸드폰 떨어뜨리는 카구야 1",
        [Locale.ChineseCN]: "辉夜掉手机 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.ObjectImage, Type.FaceImage],
    width: 640,
    height: 831,
    texts: [],
    images: [
        { id: 0, description: "Kaguya's face" },
        { id: 1, description: "phone screen" },
    ],
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
                src={images[1]}
                width={185}
                height={185}
                style={{
                    position: "absolute",
                    top: 340,
                    left: 220,
                    objectFit: "cover",
                    transform: "rotate(-17deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaKaguyaDroppingPhone1.png"
                width={640}
                height={831}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: -10,
                    right: 145,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    bottom: 140,
                    left: 130,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
