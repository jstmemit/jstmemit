import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const manLookingUp: Template = {
    name: "manLookingUp",
    displayName: buildLocales("Man looking up", {
        [Locale.Russian]: "Мужчина смотрит вверх",
        [Locale.Ukrainian]: "Чоловік дивиться вгору",
        [Locale.Dutch]: "Man kijkt omhoog",
        [Locale.French]: "Homme regardant vers le haut",
        [Locale.German]: "Mann blickt nach oben",
        [Locale.Polish]: "Mężczyzna patrzący w górę",
        [Locale.SpanishES]: "Hombre mirando hacia arriba",
        [Locale.SpanishLATAM]: "Hombre mirando hacia arriba",
        [Locale.PortugueseBR]: "Homem olhando para cima",
        [Locale.Turkish]: "Yukarı bakan adam",
        [Locale.Italian]: "Uomo che guarda in alto",
        [Locale.Indonesian]: "Pria melihat ke atas",
        [Locale.Czech]: "Muž dívající se nahoru",
        [Locale.Japanese]: "見上げる男",
        [Locale.Korean]: "위를 올려다보는 남자",
        [Locale.ChineseCN]: "抬头看的男人",
    }),
    topics: [Topic.Reaction, Topic.Movies],
    types: [Type.TextTopWithBackground],
    width: 661,
    height: 372,
    texts: [{ id: 0, description: "whispered phrase", minLength: 1, maxLength: 6 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/manlookingup.png"
                width={661}
                height={372}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
