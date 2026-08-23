import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraMinoriHoldingDocument: Template = {
    name: "toradoraMinoriHoldingDocument",
    displayName: buildLocales("Minori holding document", {
        [Locale.Russian]: "Минори держит документ",
        [Locale.Ukrainian]: "Мінорі тримає документ",
        [Locale.Dutch]: "Minori houdt document vast",
        [Locale.French]: "Minori tenant un document",
        [Locale.German]: "Minori hält Dokument",
        [Locale.Polish]: "Minori trzyma dokument",
        [Locale.SpanishES]: "Minori sosteniendo un documento",
        [Locale.SpanishLATAM]: "Minori sosteniendo un documento",
        [Locale.PortugueseBR]: "Minori segurando documento",
        [Locale.Turkish]: "Belge tutan Minori",
        [Locale.Italian]: "Minori con in mano un documento",
        [Locale.Indonesian]: "Minori memegang dokumen",
        [Locale.Czech]: "Minori drží dokument",
        [Locale.Japanese]: "書類を持つ実乃梨",
        [Locale.Korean]: "서류를 들고 있는 미노리",
        [Locale.ChineseCN]: "拿着文件的实乃梨",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextCenterWithBackground],
    width: 640,
    height: 374,
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
            <div
                style={{
                    position: "absolute",
                    left: "22%",
                    bottom: "25%",
                    width: "25%",
                    height: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    transform: "rotate(9deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 25,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraMinoriHoldingDocument1.png"
                width={640}
                height={374}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
        </div>
    ),
};
