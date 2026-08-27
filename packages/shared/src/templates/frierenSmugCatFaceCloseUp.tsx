import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenSmugCatFaceCloseUp: Template = {
    name: "frierenSmugCatFaceCloseUp",
    displayName: buildLocales("Frieren smug cat face close up", {
        [Locale.Russian]: "Довольное кошачье лицо Фрирен крупным планом",
        [Locale.Ukrainian]: "Задоволене котяче обличчя Фрірен крупним планом",
        [Locale.Dutch]: "Frieren zelfingenomen kattengezicht close-up",
        [Locale.French]: "Gros plan sur le visage de chat suffisant de Frieren",
        [Locale.German]: "Frieren selbstgefälliges Katzengesicht Nahaufnahme",
        [Locale.Polish]: "Zbliżenie zadowolonej kociej twarzy Frieren",
        [Locale.SpanishES]: "Primer plano de la cara de gato engreída de Frieren",
        [Locale.SpanishLATAM]: "Primer plano de la cara de gato engreída de Frieren",
        [Locale.PortugueseBR]: "Close do rosto de gato presunçoso da Frieren",
        [Locale.Turkish]: "Frieren ukala kedi yüzü yakından",
        [Locale.Italian]: "Primo piano della faccia da gatto compiaciuta di Frieren",
        [Locale.Indonesian]: "Frieren wajah kucing sombong close up",
        [Locale.Czech]: "Spokojený kočičí obličej Frieren zblízka",
        [Locale.Japanese]: "フリーレンのドヤ顔 猫目 アップ",
        [Locale.Korean]: "프리렌 냥이 썩소 클로즈업",
        [Locale.ChineseCN]: "芙莉莲得意猫脸特写",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextTopWithBackground],
    width: 596,
    height: 445,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenSmugCatFaceCloseUp.png"
                width={596}
                height={335}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
