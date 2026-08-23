import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const diagramIQ: Template = {
    name: "diagramIQ",
    displayName: buildLocales("Diagram IQ", {
        [Locale.Russian]: "Диаграмма IQ",
        [Locale.Ukrainian]: "Діаграма IQ",
        [Locale.Dutch]: "IQ-diagram",
        [Locale.French]: "Diagramme QI",
        [Locale.German]: "IQ-Diagramm",
        [Locale.Polish]: "Diagram IQ",
        [Locale.SpanishES]: "Diagrama de CI",
        [Locale.SpanishLATAM]: "Diagrama de CI",
        [Locale.PortugueseBR]: "Diagrama de QI",
        [Locale.Turkish]: "IQ diyagramı",
        [Locale.Italian]: "Diagramma del QI",
        [Locale.Indonesian]: "Diagram IQ",
        [Locale.Czech]: "Diagram IQ",
        [Locale.Japanese]: "IQ図",
        [Locale.Korean]: "IQ 다이어그램",
        [Locale.ChineseCN]: "智商图表",
    }),
    topics: [Topic.Misc],
    types: [Type.TextTop, Type.TextLeft, Type.TextRight, Type.FaceImage, Type.ThreeOption],
    width: 1272,
    height: 843,
    texts: [
        { id: 0, description: "stupid text", minLength: 1, maxLength: 5 },
        { id: 1, description: "normal text", minLength: 1, maxLength: 7 },
        { id: 2, description: "clever text", minLength: 1, maxLength: 5 },
    ],
    images: [
        { id: 0, description: "stupid face" },
        { id: 1, description: "normal face" },
        { id: 2, description: "clever face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/diagramIQ.jpg"
                width={1272}
                height={843}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: 150,
                    left: 160,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 520,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    bottom: 190,
                    right: 250,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 60,
                    bottom: 400,
                    width: "400px",
                    height: "200px",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <span
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[0]}
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    transform: "translateX(-50%)",
                    width: "50%",
                    height: "15%",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <span
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[1]}
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 60,
                    bottom: 400,
                    width: "400px",
                    height: "200px",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <span
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[2]}
                </span>
            </div>
        </div>
    ),
};
