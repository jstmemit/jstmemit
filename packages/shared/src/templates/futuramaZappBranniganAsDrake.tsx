import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const futuramaZappBranniganAsDrake: Template = {
    name: "futuramaZappBranniganAsDrake",
    displayName: buildLocales("Zapp Brannigan as Drake", {
        [Locale.Russian]: "Зепп Бранниган в роли Дрейка",
        [Locale.Ukrainian]: "Запп Бранніган у ролі Дрейка",
        [Locale.Dutch]: "Zapp Brannigan als Drake",
        [Locale.French]: "Zapp Brannigan en Drake",
        [Locale.German]: "Zapp Brannigan als Drake",
        [Locale.Polish]: "Zapp Brannigan jako Drake",
        [Locale.SpanishES]: "Zapp Brannigan como Drake",
        [Locale.SpanishLATAM]: "Zapp Brannigan como Drake",
        [Locale.PortugueseBR]: "Zapp Brannigan como Drake",
        [Locale.Turkish]: "Drake olarak Zapp Brannigan",
        [Locale.Italian]: "Zapp Brannigan come Drake",
        [Locale.Indonesian]: "Zapp Brannigan sebagai Drake",
        [Locale.Czech]: "Zapp Brannigan jako Drake",
        [Locale.Japanese]: "ドレイクのザップ・ブラニガン",
        [Locale.Korean]: "드레이크로 분한 잽 브래니건",
        [Locale.ChineseCN]: "扮演德雷克的扎普·布兰尼根",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 2048,
    height: 1368,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 10 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 10 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaZappBranniganAsDrake.png"
                width={2048}
                height={1368}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
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
                        lineClamp: 5,
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
                    bottom: 0,
                    width: "50%",
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
                        lineClamp: 5,
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
        </div>
    ),
};
