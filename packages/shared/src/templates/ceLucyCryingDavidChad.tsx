import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ceLucyCryingDavidChad: Template = {
    name: "ceLucyCryingDavidChad",
    displayName: buildLocales("Lucy crying David chad", {
        [Locale.Russian]: "Люси плачет, Дэвид чад",
        [Locale.Ukrainian]: "Люсі плаче, Девід чад",
        [Locale.Dutch]: "Lucy huilend, David chad",
        [Locale.French]: "Lucy en pleurs, David chad",
        [Locale.German]: "Lucy weint, David Chad",
        [Locale.Polish]: "Lucy płacze, David chad",
        [Locale.SpanishES]: "Lucy llorando, David chad",
        [Locale.SpanishLATAM]: "Lucy llorando, David chad",
        [Locale.PortugueseBR]: "Lucy chorando, David chad",
        [Locale.Turkish]: "Lucy ağlıyor, David chad",
        [Locale.Italian]: "Lucy che piange, David chad",
        [Locale.Indonesian]: "Lucy menangis, David chad",
        [Locale.Czech]: "Lucy pláče, David chad",
        [Locale.Japanese]: "泣くルーシーとチャッドなデイビッド",
        [Locale.Korean]: "우는 루시, 차드 데이비드",
        [Locale.ChineseCN]: "露西哭泣，大卫是chad",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 736,
    height: 433,
    texts: [
        { id: 0, description: "the phrase Lucy says", minLength: 1, maxLength: 6 },
        { id: 1, description: "the phrase David says", minLength: 1, maxLength: 6 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceLucyCryingDavidChad.png"
                width={736}
                height={323}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px 30px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
                    top: 0,
                    width: "50%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px 30px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
