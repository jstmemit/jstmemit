import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const homerHiding: Template = {
    name: "homerHiding",
    displayName: buildLocales("Homer hiding", {
        [Locale.Russian]: "Гомер прячется",
        [Locale.Ukrainian]: "Гомер ховається",
        [Locale.Dutch]: "Zich verstoppende Homer",
        [Locale.French]: "Homer se cache",
        [Locale.German]: "Homer versteckt sich",
        [Locale.Polish]: "Homer się ukrywa",
        [Locale.SpanishES]: "Homer escondiéndose",
        [Locale.SpanishLATAM]: "Homero escondiéndose",
        [Locale.PortugueseBR]: "Homer se escondendo",
        [Locale.Turkish]: "Homer saklanıyor",
        [Locale.Italian]: "Homer che si nasconde",
        [Locale.Indonesian]: "Homer bersembunyi",
        [Locale.Czech]: "Homer se schovává",
        [Locale.Japanese]: "茂みに隠れるホーマー",
        [Locale.Korean]: "숨는 호머",
        [Locale.ChineseCN]: "霍默躲藏",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.TextBottom, Type.FaceImage, Type.FourOption],
    width: 600,
    height: 600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "homer hiding" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/homerhiding.jpg"
                width={600}
                height={600}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{ position: "absolute", top: 35, left: 110, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", top: 40, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{ position: "absolute", bottom: 110, left: 120, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{ position: "absolute", bottom: 110, left: 425, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
