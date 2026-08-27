import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const jkHigurumaCoveringFaceStare: Template = {
    name: "jkHigurumaCoveringFaceStare",
    displayName: buildLocales("Higuruma covering face stare", {
        [Locale.Russian]: "Хигурума закрывает лицо и смотрит",
        [Locale.Ukrainian]: "Хігурума закриває обличчя і дивиться",
        [Locale.Dutch]: "Higuruma bedekt gezicht en staart",
        [Locale.French]: "Higuruma se couvre le visage et fixe",
        [Locale.German]: "Higuruma verdeckt Gesicht und starrt",
        [Locale.Polish]: "Higuruma zakrywa twarz i patrzy",
        [Locale.SpanishES]: "Higuruma cubriéndose la cara y mirando",
        [Locale.SpanishLATAM]: "Higuruma cubriéndose la cara y mirando",
        [Locale.PortugueseBR]: "Higuruma cobrindo o rosto e encarando",
        [Locale.Turkish]: "Yüzünü kapatıp bakan Higuruma",
        [Locale.Italian]: "Higuruma si copre il viso e fissa",
        [Locale.Indonesian]: "Higuruma menutupi wajah dan menatap",
        [Locale.Czech]: "Higuruma si zakrývá obličej a zírá",
        [Locale.Japanese]: "顔を覆って見つめる日車",
        [Locale.Korean]: "얼굴 가리고 쳐다보는 히구루마",
        [Locale.ChineseCN]: "日车掩面凝视",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 446,
    height: 447,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkHigurumaCoveringFaceStare.png"
                width={223}
                height={447}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
