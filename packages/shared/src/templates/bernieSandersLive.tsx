import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const bernieSandersLive: Template = {
    name: "bernieSandersLive",
    displayName: buildLocales("Bernie Sanders live", {
        [Locale.Russian]: "Берни Сандерс в прямом эфире",
        [Locale.Ukrainian]: "Берні Сандерс у прямому ефірі",
        [Locale.Dutch]: "Bernie Sanders live",
        [Locale.French]: "Bernie Sanders en direct",
        [Locale.German]: "Bernie Sanders live",
        [Locale.Polish]: "Bernie Sanders na żywo",
        [Locale.SpanishES]: "Bernie Sanders en vivo",
        [Locale.SpanishLATAM]: "Bernie Sanders en vivo",
        [Locale.PortugueseBR]: "Bernie Sanders ao vivo",
        [Locale.Turkish]: "Bernie Sanders canlı",
        [Locale.Italian]: "Bernie Sanders in diretta",
        [Locale.Indonesian]: "Bernie Sanders langsung",
        [Locale.Czech]: "Bernie Sanders živě",
        [Locale.Japanese]: "バーニー・サンダース ライブ",
        [Locale.Korean]: "버니 샌더스 라이브",
        [Locale.ChineseCN]: "伯尼·桑德斯直播",
    }),
    topics: [Topic.YouTube],
    types: [Type.FaceImage, Type.TextCenter],
    width: 981,
    height: 1038,
    texts: [
        { id: 0, description: "person speech", minLength: 1, maxLength: 3 },
        { id: 1, description: "Bernie Sanders reaction", minLength: 1, maxLength: 3 },
    ],
    images: [{ id: 0, description: "Person who is debating with Bernie Sanders on his live stream" }],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={460}
                height={250}
                style={{
                    position: "absolute",
                    top: 290,
                    left: 40,
                    borderColor: "#176c3f",
                    borderWidth: 3,
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bernieSandersLive.png"
                width={981}
                height={1038}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "5%",
                    bottom: 500,
                    width: "45%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#fff",
                        wordBreak: "break-word",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[0]}!
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 500,
                    width: "46%",
                    maxWidth: "46%",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        wordBreak: "break-word",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    *{texts[1]}*
                </span>
            </div>
        </div>
    ),
};
