import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const toradoraMinoriHoldingDocument1: Template = {
    name: "toradoraMinoriHoldingDocument1",
    displayName: buildLocales("Minori holding document 1", {
        [Locale.Russian]: "Минори держит документ 1",
        [Locale.Ukrainian]: "Мінорі тримає документ 1",
        [Locale.Dutch]: "Minori houdt document vast 1",
        [Locale.French]: "Minori tenant un document 1",
        [Locale.German]: "Minori hält Dokument 1",
        [Locale.Polish]: "Minori trzyma dokument 1",
        [Locale.SpanishES]: "Minori sosteniendo un documento 1",
        [Locale.SpanishLATAM]: "Minori sosteniendo un documento 1",
        [Locale.PortugueseBR]: "Minori segurando documento 1",
        [Locale.Turkish]: "Belge tutan Minori 1",
        [Locale.Italian]: "Minori con in mano un documento 1",
        [Locale.Indonesian]: "Minori memegang dokumen 1",
        [Locale.Czech]: "Minori drží dokument 1",
        [Locale.Japanese]: "書類を持つ実乃梨 1",
        [Locale.Korean]: "서류를 들고 있는 미노리 1",
        [Locale.ChineseCN]: "拿着文件的实乃梨 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextBottomWithBackground, Type.ObjectImage],
    width: 640,
    height: 494,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Document" }],
    element: ({ images, texts, font }: TemplateProps) => (
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
                src={images[0]}
                width={230}
                height={230}
                style={{
                    position: "absolute",
                    left: "17%",
                    top: "11%",
                    objectFit: "cover",
                    transform: "rotate(7deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraMinoriHoldingDocument1.png"
                width={640}
                height={374}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
