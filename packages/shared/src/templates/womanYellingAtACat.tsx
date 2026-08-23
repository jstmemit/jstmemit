import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const womanYellingAtACat: Template = {
    name: "womanYellingAtACat",
    displayName: buildLocales("Woman yelling at a cat", {
        [Locale.Russian]: "Женщина кричит на кота",
        [Locale.Ukrainian]: "Жінка кричить на кота",
        [Locale.Dutch]: "Vrouw schreeuwt tegen kat",
        [Locale.French]: "Femme criant sur un chat",
        [Locale.German]: "Frau schreit Katze an",
        [Locale.Polish]: "Kobieta krzycząca na kota",
        [Locale.SpanishES]: "Mujer gritándole a un gato",
        [Locale.SpanishLATAM]: "Mujer gritándole a un gato",
        [Locale.PortugueseBR]: "Mulher gritando com gato",
        [Locale.Turkish]: "Kediye bağıran kadın",
        [Locale.Italian]: "Donna che urla a un gatto",
        [Locale.Indonesian]: "Wanita berteriak pada kucing",
        [Locale.Czech]: "Žena křičí na kočku",
        [Locale.Japanese]: "猫に怒鳴る女",
        [Locale.Korean]: "고양이에게 소리지르는 여자",
        [Locale.ChineseCN]: "女人冲猫大吼",
    }),
    topics: [Topic.Reaction, Topic.Animals],
    types: [Type.TwoOption, Type.TextRightWithBackground, Type.FaceImage],
    width: 1200,
    height: 1200,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 15 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 15 },
    ],
    images: [{ id: 0, description: "cat`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/womanYellingAtACat.png"
                width={1200}
                height={1200}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: 200,
                    left: 230,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "48%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
                    bottom: 0,
                    width: "48%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
