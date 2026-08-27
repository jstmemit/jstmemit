import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const animeTheThreeStagesOfApproval: Template = {
    name: "animeTheThreeStagesOfApproval",
    displayName: buildLocales("The three stages of approval", {
        [Locale.Russian]: "Три стадии одобрения",
        [Locale.Ukrainian]: "Три стадії схвалення",
        [Locale.Dutch]: "De drie stadia van goedkeuring",
        [Locale.French]: "Les trois étapes de l'approbation",
        [Locale.German]: "Die drei Phasen der Zustimmung",
        [Locale.Polish]: "Trzy etapy aprobaty",
        [Locale.SpanishES]: "Las tres etapas de aprobación",
        [Locale.SpanishLATAM]: "Las tres etapas de aprobación",
        [Locale.PortugueseBR]: "Os três estágios de aprovação",
        [Locale.Turkish]: "Onayın üç aşaması",
        [Locale.Italian]: "Le tre fasi dell'approvazione",
        [Locale.Indonesian]: "Tiga tahap persetujuan",
        [Locale.Czech]: "Tři fáze schválení",
        [Locale.Japanese]: "承認の3段階",
        [Locale.Korean]: "승인의 3단계",
        [Locale.ChineseCN]: "赞同的三个阶段",
    }),
    topics: [Topic.Reaction, Topic.Anime],
    types: [Type.TextRightWithBackground, Type.ThreeOption],
    width: 1008,
    height: 1500,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/animeTheThreeStagesOfApproval.png"
                width={504}
                height={1500}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "33%",
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
                        lineClamp: 7,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: "33%",
                    width: "50%",
                    height: "34%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "10px solid black",
                    borderBottom: "10px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "33%",

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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
