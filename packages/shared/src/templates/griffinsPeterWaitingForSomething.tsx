import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const griffinsPeterWaitingForSomething: Template = {
    name: "griffinsPeterWaitingForSomething",
    displayName: buildLocales("Peter waiting for something", {
        [Locale.Russian]: "Питер чего-то ждет",
        [Locale.Ukrainian]: "Пітер чогось чекає",
        [Locale.Dutch]: "Peter wacht op iets",
        [Locale.French]: "Peter attendant quelque chose",
        [Locale.German]: "Peter wartet auf etwas",
        [Locale.Polish]: "Peter czekający na coś",
        [Locale.SpanishES]: "Peter esperando algo",
        [Locale.SpanishLATAM]: "Peter esperando algo",
        [Locale.PortugueseBR]: "Peter esperando por algo",
        [Locale.Turkish]: "Peter bir şey bekliyor",
        [Locale.Italian]: "Peter aspetta qualcosa",
        [Locale.Indonesian]: "Peter menunggu sesuatu",
        [Locale.Czech]: "Peter na něco čeká",
        [Locale.Japanese]: "何かを待つピーター",
        [Locale.Korean]: "뭔가를 기다리는 피터",
        [Locale.ChineseCN]: "等待中的彼得",
    }),
    topics: [Topic.Griffins, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottom, Type.FaceImage],
    width: 568,
    height: 386,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Peter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterWaitingForSomething.jpg"
                width={568}
                height={386}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
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
