import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const crowdFromAngryToHappy: Template = {
    name: "crowdFromAngryToHappy",
    displayName: buildLocales("Crowd from angry to happy", {
        [Locale.Russian]: "Толпа от злости к радости",
        [Locale.Ukrainian]: "Натовп від злості до радості",
        [Locale.Dutch]: "Menigte van boos naar blij",
        [Locale.French]: "Foule de la colère à la joie",
        [Locale.German]: "Menge von wütend zu glücklich",
        [Locale.Polish]: "Tłum od złości do radości",
        [Locale.SpanishES]: "Multitud de enfado a alegría",
        [Locale.SpanishLATAM]: "Multitud de enojo a alegría",
        [Locale.PortugueseBR]: "Multidão de raiva para felicidade",
        [Locale.Turkish]: "Kalabalık kızgınlıktan mutluluğa",
        [Locale.Italian]: "Folla dalla rabbia alla felicità",
        [Locale.Indonesian]: "Kerumunan dari marah ke bahagia",
        [Locale.Czech]: "Dav od vzteku k radosti",
        [Locale.Japanese]: "怒りから喜びに変わる群衆",
        [Locale.Korean]: "화남에서 기쁨으로 변하는 군중",
        [Locale.ChineseCN]: "人群从愤怒到开心",
    }),
    topics: [Topic.Reaction, Topic.Cartoons],
    types: [Type.TwoOption, Type.TextLeft, Type.FaceImage],
    width: 716,
    height: 700,
    texts: [
        { id: 0, description: "first speach", minLength: 1, maxLength: 2 },
        { id: 1, description: "second speach", minLength: 1, maxLength: 2 },
    ],
    images: [{ id: 0, description: "person face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/crowdFromAngryToHappy.jpg"
                width={716}
                height={700}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 110,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    bottom: 190,
                    left: 140,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "15%",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        wordBreak: "break-word",
                        whiteSpace: "nowrap",

                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[0]}
                </span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    width: "50%",
                    height: "15%",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                        wordBreak: "break-word",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                    }}
                >
                    {texts[1]}
                </span>
            </div>
        </div>
    ),
};
