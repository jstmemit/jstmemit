import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobHandsomeFace: Template = {
    name: "spongebobHandsomeFace",
    displayName: buildLocales("Spongebob handsome face", {
        [Locale.Russian]: "Красивое лицо Губки Боба",
        [Locale.Ukrainian]: "Гарне обличчя Губки Боба",
        [Locale.Dutch]: "Spongebob knap gezicht",
        [Locale.French]: "Beau visage de Bob l'éponge",
        [Locale.German]: "Spongebob hübsches Gesicht",
        [Locale.Polish]: "Przystojna twarz SpongeBoba",
        [Locale.SpanishES]: "Cara guapa de Bob Esponja",
        [Locale.SpanishLATAM]: "Cara hermosa de Bob Esponja",
        [Locale.PortugueseBR]: "Rosto bonito do Bob Esponja",
        [Locale.Turkish]: "SüngerBob yakışıklı yüzü",
        [Locale.Italian]: "Bella faccia di SpongeBob",
        [Locale.Indonesian]: "Wajah tampan Spongebob",
        [Locale.Czech]: "Spongebob fešák",
        [Locale.Japanese]: "ハンサムなスポンジ・ボブ",
        [Locale.Korean]: "잘생긴 스폰지밥",
        [Locale.ChineseCN]: "英俊的海绵宝宝",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTop, Type.TextBottom],
    width: 750,
    height: 1334,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 8 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobHandsomeFace.png"
                width={750}
                height={1334}
                style={{ position: "absolute", top: 0, left: 0 }}
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
