import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const evangelionShinjiCalmVsPanic: Template = {
    name: "evangelionShinjiCalmVsPanic",
    displayName: buildLocales("Shinji calm vs panic", {
        [Locale.Russian]: "Синдзи спокоен vs в панике",
        [Locale.Ukrainian]: "Шінджі спокійний vs в паніці",
        [Locale.Dutch]: "Shinji kalm vs paniek",
        [Locale.French]: "Shinji calme vs paniqué",
        [Locale.German]: "Shinji ruhig vs. panisch",
        [Locale.Polish]: "Shinji spokojny vs w panice",
        [Locale.SpanishES]: "Shinji tranquilo vs en pánico",
        [Locale.SpanishLATAM]: "Shinji tranquilo vs en pánico",
        [Locale.PortugueseBR]: "Shinji calmo vs em pânico",
        [Locale.Turkish]: "Shinji sakin vs panikte",
        [Locale.Italian]: "Shinji calmo vs in preda al panico",
        [Locale.Indonesian]: "Shinji tenang vs panik",
        [Locale.Czech]: "Shinji klidný vs v panice",
        [Locale.Japanese]: "冷静なシンジ vs パニックのシンジ",
        [Locale.Korean]: "차분한 신지 vs 패닉 신지",
        [Locale.ChineseCN]: "真嗣冷静vs恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 1200,
    height: 700,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiCalmVsPanic.png"
                width={1200}
                height={700}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
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
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
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
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
