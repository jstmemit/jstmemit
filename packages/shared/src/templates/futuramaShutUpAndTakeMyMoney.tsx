import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaShutUpAndTakeMyMoney: Template = {
    name: "futuramaShutUpAndTakeMyMoney",
    displayName: buildLocales("Shut up and take my money", {
        [Locale.Russian]: "Заткнись и возьми мои деньги",
        [Locale.Ukrainian]: "Замовкни і візьми мої гроші",
        [Locale.Dutch]: "Kop dicht en neem mijn geld",
        [Locale.French]: "Tais-toi et prends mon argent",
        [Locale.German]: "Halt die Klappe und nimm mein Geld",
        [Locale.Polish]: "Zamknij się i bierz moje pieniądze",
        [Locale.SpanishES]: "Cállate y toma mi dinero",
        [Locale.SpanishLATAM]: "Cállate y toma mi dinero",
        [Locale.PortugueseBR]: "Cale a boca e pegue meu dinheiro",
        [Locale.Turkish]: "Çeneni kapa ve paramı al",
        [Locale.Italian]: "Stai zitto e prendi i miei soldi",
        [Locale.Indonesian]: "Diam dan ambil uangku",
        [Locale.Czech]: "Sklapni a vezmi si mý peníze",
        [Locale.Japanese]: "黙って俺の金を持っていけ",
        [Locale.Korean]: "닥치고 내 돈이나 가져가",
        [Locale.ChineseCN]: "闭嘴，拿着我的钱",
    }),
    topics: [Topic.Futurama, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextTopWithBackground, Type.DefaultText],
    width: 735,
    height: 414,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Fry`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaShutUpAndTakeMyMoney.jpg"
                width={735}
                height={414}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: "20%",
                    left: 200,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "16%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
