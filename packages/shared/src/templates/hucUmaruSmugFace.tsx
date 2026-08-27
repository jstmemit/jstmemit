import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruSmugFace: Template = {
    name: "hucUmaruSmugFace",
    displayName: buildLocales("Umaru smug face", {
        [Locale.Russian]: "Довольное лицо Умару",
        [Locale.Ukrainian]: "Задоволене обличчя Умару",
        [Locale.Dutch]: "Umaru zelfingenomen gezicht",
        [Locale.French]: "Visage suffisant d'Umaru",
        [Locale.German]: "Umaru selbstgefälliges Gesicht",
        [Locale.Polish]: "Zadowolona twarz Umaru",
        [Locale.SpanishES]: "Cara engreída de Umaru",
        [Locale.SpanishLATAM]: "Cara engreída de Umaru",
        [Locale.PortugueseBR]: "Rosto presunçoso da Umaru",
        [Locale.Turkish]: "Umaru ukala yüz",
        [Locale.Italian]: "Faccia compiaciuta di Umaru",
        [Locale.Indonesian]: "Wajah sombong Umaru",
        [Locale.Czech]: "Spokojený obličej Umaru",
        [Locale.Japanese]: "うまるのドヤ顔",
        [Locale.Korean]: "우마루 의기양양한 표정",
        [Locale.ChineseCN]: "得意的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextLeftWithBackground],
    width: 1224,
    height: 611,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruSmugFace.png"
                width={612}
                height={611}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
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
