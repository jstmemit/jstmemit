import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const pleaseBePatient: Template = {
    name: "pleaseBePatient",
    displayName: buildLocales("Please be patient", {
        [Locale.Russian]: "Пожалуйста, будьте терпеливы",
        [Locale.Ukrainian]: "Будь ласка, будьте терплячі",
        [Locale.Dutch]: "Wees alsjeblieft geduldig",
        [Locale.French]: "S'il vous plaît soyez patient",
        [Locale.German]: "Bitte haben Sie Geduld",
        [Locale.Polish]: "Proszę o cierpliwość",
        [Locale.SpanishES]: "Por favor sea paciente",
        [Locale.SpanishLATAM]: "Por favor sea paciente",
        [Locale.PortugueseBR]: "Por favor seja paciente",
        [Locale.Turkish]: "Lütfen sabırlı olun",
        [Locale.Italian]: "Per favore sii paziente",
        [Locale.Indonesian]: "Harap bersabar",
        [Locale.Czech]: "Prosím buďte trpěliví",
        [Locale.Japanese]: "しばらくお待ちください",
        [Locale.Korean]: "조금만 인내심을 가져주세요",
        [Locale.ChineseCN]: "请耐心等待",
    }),
    topics: [Topic.Anime, Topic.Reaction],
    types: [Type.TextRightWithBackground, Type.FaceImage, Type.DefaultText],
    width: 1051,
    height: 1032,
    texts: [
        {
            id: 0,
            description: "Phrase that a person with 'please be patient' blue cap says",
            minLength: 1,
            maxLength: 15,
        },
    ],
    images: [{ id: 0, description: "Person with 'please be patient' blue cap" }],
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
                src={images[0]}
                width={410}
                height={410}
                style={{
                    position: "absolute",
                    top: 510,
                    left: 10,
                    borderRadius: 256,
                    borderColor: "black",
                    borderWidth: 8,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/pleaseBePatient.png"
                width={1051}
                height={1032}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 250,
                    right: 125,
                    width: "35%",
                    height: "55%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 10,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
