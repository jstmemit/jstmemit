import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqMikuPoutingBlueAura: Template = {
    name: "tqqMikuPoutingBlueAura",
    displayName: buildLocales("Miku pouting with blue aura", {
        [Locale.Russian]: "Мику дуется с синей аурой",
        [Locale.Ukrainian]: "Міку дується із синьою аурою",
        [Locale.Dutch]: "Pruilende Miku met blauwe aura",
        [Locale.French]: "Miku qui boude avec une aura bleue",
        [Locale.German]: "Schmollende Miku mit blauer Aura",
        [Locale.Polish]: "Dąsająca się Miku z niebieską aurą",
        [Locale.SpanishES]: "Miku haciendo pucheros con aura azul",
        [Locale.SpanishLATAM]: "Miku haciendo pucheros con aura azul",
        [Locale.PortugueseBR]: "Miku fazendo beicinho com aura azul",
        [Locale.Turkish]: "Mavi auralı somurtan Miku",
        [Locale.Italian]: "Miku imbronciata con aura blu",
        [Locale.Indonesian]: "Miku cemberut dengan aura biru",
        [Locale.Czech]: "Špulící Miku s modrou aurou",
        [Locale.Japanese]: "青いオーラでふくれる三玖",
        [Locale.Korean]: "파란 오라를 뿜으며 뾰루퉁한 미쿠",
        [Locale.ChineseCN]: "带着蓝色光环嘟嘴的三玖",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 378,
    animationDuration: 1080,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqMikuPoutingBlueAura.gif"
                width={498}
                height={278}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
