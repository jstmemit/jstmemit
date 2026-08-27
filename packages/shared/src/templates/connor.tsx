import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const connor: Template = {
    name: "connor",
    displayName: buildLocales("Connor choosing", {
        [Locale.Russian]: "Коннор выбирает",
        [Locale.Ukrainian]: "Коннор обирає",
        [Locale.Dutch]: "Connor kiest",
        [Locale.French]: "Connor fait son choix",
        [Locale.German]: "Connor entscheidet sich",
        [Locale.Polish]: "Connor wybiera",
        [Locale.SpanishES]: "Connor eligiendo",
        [Locale.SpanishLATAM]: "Connor eligiendo",
        [Locale.PortugueseBR]: "Connor escolhendo",
        [Locale.Turkish]: "Connor seçim yapıyor",
        [Locale.Italian]: "Connor che sceglie",
        [Locale.Indonesian]: "Connor memilih",
        [Locale.Czech]: "Connor si vybírá",
        [Locale.Japanese]: "選択するコナー",
        [Locale.Korean]: "선택하는 코너",
        [Locale.ChineseCN]: "康纳做出选择",
    }),
    topics: [Topic.Games],
    types: [Type.TextTopWithBackground, Type.FourOption, Type.TextBottom, Type.FaceImage],
    width: 960,
    height: 1211,
    texts: [
        { id: 0, description: "option 1", minLength: 1, maxLength: 12 },
        { id: 1, description: "option 2", minLength: 1, maxLength: 12 },
        { id: 2, description: "option 3", minLength: 1, maxLength: 12 },
        { id: 3, description: "option 4 (the chosen one)", minLength: 1, maxLength: 20 },
        { id: 4, description: "Connor`s phrase", minLength: 1, maxLength: 12 },
    ],
    images: [{ id: 0, description: "Connor's face" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/connor.png"
                width={960}
                height={1211}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={220}
                height={220}
                style={{
                    position: "absolute",
                    top: 630,
                    left: 610,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: 0,
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        width: "100%",
                    }}
                >
                    {texts[0]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "10%",
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        width: "100%",
                    }}
                >
                    {texts[1]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "20%",
                    width: "90%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        width: "100%",
                    }}
                >
                    {texts[2]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    width: "90%",
                    minHeight: "10%",
                    maxHeight: "20%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[3]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        width: "100%",
                    }}
                >
                    {texts[3]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[4]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[4]}
                </div>
            </div>
        </div>
    ),
};
