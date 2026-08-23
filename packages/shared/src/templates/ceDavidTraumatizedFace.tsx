import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ceDavidTraumatizedFace: Template = {
    name: "ceDavidTraumatizedFace",
    displayName: buildLocales("David traumatized face", {
        [Locale.Russian]: "Дэвид с травмированным лицом",
        [Locale.Ukrainian]: "Девід із травмованим обличчям",
        [Locale.Dutch]: "David getraumatiseerd gezicht",
        [Locale.French]: "David visage traumatisé",
        [Locale.German]: "David traumatisiertes Gesicht",
        [Locale.Polish]: "David ze zszokowaną twarzą",
        [Locale.SpanishES]: "David con cara traumatizada",
        [Locale.SpanishLATAM]: "David con cara traumatizada",
        [Locale.PortugueseBR]: "David com rosto traumatizado",
        [Locale.Turkish]: "David travmatize yüz ifadesiyle",
        [Locale.Italian]: "David faccia traumatizzata",
        [Locale.Indonesian]: "David wajah trauma",
        [Locale.Czech]: "David s traumatizovaným výrazem",
        [Locale.Japanese]: "トラウマ顔のデイビッド",
        [Locale.Korean]: "트라우마 표정 데이비드",
        [Locale.ChineseCN]: "大卫受创伤的表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 743,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceDavidTraumatizedFace.png"
                width={640}
                height={633}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        lineClamp: 2,
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
