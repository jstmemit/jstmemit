import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsLIsaShowPresentation: Template = {
    name: "simpsonsLIsaShowPresentation",
    displayName: buildLocales("Lisa show presentation", {
        [Locale.Russian]: "Лиза показывает презентацию",
        [Locale.Ukrainian]: "Ліза показує презентацію",
        [Locale.Dutch]: "Lisa toont presentatie",
        [Locale.French]: "Lisa montrant une présentation",
        [Locale.German]: "Lisa zeigt Präsentation",
        [Locale.Polish]: "Lisa pokazuje prezentację",
        [Locale.SpanishES]: "Lisa mostrando presentación",
        [Locale.SpanishLATAM]: "Lisa mostrando presentación",
        [Locale.PortugueseBR]: "Lisa mostrando apresentação",
        [Locale.Turkish]: "Lisa sunum yapıyor",
        [Locale.Italian]: "Lisa mostra una presentazione",
        [Locale.Indonesian]: "Lisa menunjukkan presentasi",
        [Locale.Czech]: "Lisa ukazuje prezentaci",
        [Locale.Japanese]: "プレゼンするリサ",
        [Locale.Korean]: "발표하는 리사",
        [Locale.ChineseCN]: "丽莎展示PPT",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextCenterWithBackground],
    width: 736,
    height: 551,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 25 }],
    images: [{ id: 0, description: "Lisa`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsLIsaShowPresentation.jpg"
                width={736}
                height={551}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "27%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "20%",
                    top: "10%",
                    width: "65%",
                    height: "45%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 30,
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
