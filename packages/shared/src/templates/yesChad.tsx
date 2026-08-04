import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const yesChad: Template = {
    name: "yesChad",
    displayName: buildLocales("Yes Chad", {
        [Locale.Russian]: "Да, Чад",
        [Locale.Ukrainian]: "Так, Чад",
        [Locale.Dutch]: "Ja Chad",
        [Locale.French]: "Oui Chad",
        [Locale.German]: "Ja Chad",
        [Locale.Polish]: "Tak, Chad",
        [Locale.SpanishES]: "Sí Chad",
        [Locale.SpanishLATAM]: "Sí Chad",
        [Locale.PortugueseBR]: "Sim Chad",
        [Locale.Turkish]: "Evet Chad",
        [Locale.Italian]: "Sì Chad",
        [Locale.Indonesian]: "Ya Chad",
        [Locale.Czech]: "Ano Chad",
        [Locale.Japanese]: "イエス・チャド",
        [Locale.Korean]: "예스 채드",
        [Locale.ChineseCN]: "是的查德",
    }),
    topics: [Topic.Misc],
    types: [Type.FaceImage, Type.TextBottom],
    width: 1400,
    height: 733,
    texts: [{ id: 0, description: "what chad approves of", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "the chad's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/yeschad.png"
                width={1400}
                height={733}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={460}
                height={460}
                style={{ position: "absolute", top: 70, left: 135, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "25%",
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
                        fontSize: 80,
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
