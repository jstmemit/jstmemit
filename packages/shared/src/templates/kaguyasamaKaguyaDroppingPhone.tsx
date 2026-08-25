import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaDroppingPhone: Template = {
    name: "kaguyasamaKaguyaDroppingPhone",
    displayName: buildLocales("Kaguya dropping phone", {
        [Locale.Russian]: "Кагуя роняет телефон",
        [Locale.Ukrainian]: "Кагуя впускає телефон",
        [Locale.Dutch]: "Kaguya laat telefoon vallen",
        [Locale.French]: "Kaguya fait tomber son téléphone",
        [Locale.German]: "Kaguya lässt Handy fallen",
        [Locale.Polish]: "Kaguya upuszcza telefon",
        [Locale.SpanishES]: "Kaguya dejando caer el teléfono",
        [Locale.SpanishLATAM]: "Kaguya dejando caer el teléfono",
        [Locale.PortugueseBR]: "Kaguya derrubando o telefone",
        [Locale.Turkish]: "Kaguya telefonunu düşürüyor",
        [Locale.Italian]: "Kaguya fa cadere il telefono",
        [Locale.Indonesian]: "Kaguya menjatuhkan ponsel",
        [Locale.Czech]: "Kaguya upouští telefon",
        [Locale.Japanese]: "スマホを落とすかぐや",
        [Locale.Korean]: "핸드폰 떨어뜨리는 카구야",
        [Locale.ChineseCN]: "辉夜掉手机",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.DefaultText, Type.FaceImage],
    width: 640,
    height: 831,
    texts: [],
    images: [{ id: 0, description: "Kaguya's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaKaguyaDroppingPhone.png"
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
