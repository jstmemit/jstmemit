import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsHideriSmugFace: Template = {
    name: "blendsHideriSmugFace",
    displayName: buildLocales("Hideri smug face", {
        [Locale.Russian]: "Хидери с самодовольным лицом",
        [Locale.Ukrainian]: "Хідері з самовдоволеним обличчям",
        [Locale.Dutch]: "Hideri met zelfvoldane blik",
        [Locale.French]: "Hideri avec un air satisfait",
        [Locale.German]: "Hideri mit selbstgefälligem Gesicht",
        [Locale.Polish]: "Hideri z zadowoloną z siebie miną",
        [Locale.SpanishES]: "Hideri con cara de suficiencia",
        [Locale.SpanishLATAM]: "Hideri con cara de suficiencia",
        [Locale.PortugueseBR]: "Hideri com cara convencida",
        [Locale.Turkish]: "Hideri kendini beğenmiş yüz ifadesiyle",
        [Locale.Italian]: "Hideri con faccia compiaciuta",
        [Locale.Indonesian]: "Hideri dengan wajah sombong",
        [Locale.Czech]: "Hideri se samolibým výrazem",
        [Locale.Japanese]: "ヒデリのドヤ顔",
        [Locale.Korean]: "히데리 우쭐한 표정",
        [Locale.ChineseCN]: "绯多莉得意的表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextRightWithBackground],
    width: 638,
    height: 396,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriSmugFace.png"
                width={319}
                height={396}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
