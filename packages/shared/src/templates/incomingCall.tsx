import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const incomingCall: Template = {
    name: "incomingCall",
    displayName: buildLocales("Incoming call", {
        [Locale.Russian]: "Входящий вызов",
        [Locale.Ukrainian]: "Вхідний дзвінок",
        [Locale.Dutch]: "Inkomende oproep",
        [Locale.French]: "Appel entrant",
        [Locale.German]: "Eingehender Anruf",
        [Locale.Polish]: "Połączenie przychodzące",
        [Locale.SpanishES]: "Llamada entrante",
        [Locale.SpanishLATAM]: "Llamada entrante",
        [Locale.PortugueseBR]: "Chamada recebida",
        [Locale.Turkish]: "Gelen arama",
        [Locale.Italian]: "Chiamata in arrivo",
        [Locale.Indonesian]: "Panggilan masuk",
        [Locale.Czech]: "Příchozí hovor",
        [Locale.Japanese]: "着信",
        [Locale.Korean]: "수신 전화",
        [Locale.ChineseCN]: "来电",
    }),
    topics: [Topic.Misc],
    types: [Type.AvatarImage, Type.TextCenter],
    width: 640,
    height: 1055,
    texts: [{ id: 0, description: "name", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/incomingCall.jpg"
                width={640}
                height={1055}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 50,
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
                    height: "100%",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
