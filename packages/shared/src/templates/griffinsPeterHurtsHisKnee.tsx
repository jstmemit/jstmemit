import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterHurtsHisKnee: Template = {
    name: "griffinsPeterHurtsHisKnee",
    displayName: buildLocales("Peter hurts his knee", {
        [Locale.Russian]: "Питер повредил колено",
        [Locale.Ukrainian]: "Пітер пошкодив коліно",
        [Locale.Dutch]: "Peter bezeert zijn knie",
        [Locale.French]: "Peter se blesse au genou",
        [Locale.German]: "Peter verletzt sich am Knie",
        [Locale.Polish]: "Peter rani się w kolano",
        [Locale.SpanishES]: "Peter se lastima la rodilla",
        [Locale.SpanishLATAM]: "Peter se lastima la rodilla",
        [Locale.PortugueseBR]: "Peter machuca o joelho",
        [Locale.Turkish]: "Peter dizini incitiyor",
        [Locale.Italian]: "Peter si fa male al ginocchio",
        [Locale.Indonesian]: "Peter melukai lututnya",
        [Locale.Czech]: "Peter si zranil koleno",
        [Locale.Japanese]: "膝を痛めるピーター",
        [Locale.Korean]: "무릎을 다친 피터",
        [Locale.ChineseCN]: "彼得伤到膝盖",
    }),
    topics: [Topic.Griffins, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottom, Type.FaceImage],
    width: 499,
    height: 361,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Peter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterHurtsHisKnee.jpg"
                width={499}
                height={361}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "35%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
