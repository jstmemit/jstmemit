import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkHigurumaCoveringFaceStare1: Template = {
    name: "jkHigurumaCoveringFaceStare1",
    displayName: buildLocales("Higuruma covering face stare 1", {
        [Locale.Russian]: "Хигурума закрывает лицо и смотрит 1",
        [Locale.Ukrainian]: "Хігурума закриває обличчя і дивиться 1",
        [Locale.Dutch]: "Higuruma bedekt gezicht en staart 1",
        [Locale.French]: "Higuruma se couvre le visage et fixe 1",
        [Locale.German]: "Higuruma verdeckt Gesicht und starrt 1",
        [Locale.Polish]: "Higuruma zakrywa twarz i patrzy 1",
        [Locale.SpanishES]: "Higuruma cubriéndose la cara y mirando 1",
        [Locale.SpanishLATAM]: "Higuruma cubriéndose la cara y mirando 1",
        [Locale.PortugueseBR]: "Higuruma cobrindo o rosto e encarando 1",
        [Locale.Turkish]: "Yüzünü kapatıp bakan Higuruma 1",
        [Locale.Italian]: "Higuruma si copre il viso e fissa 1",
        [Locale.Indonesian]: "Higuruma menutupi wajah dan menatap 1",
        [Locale.Czech]: "Higuruma si zakrývá obličej a zírá 1",
        [Locale.Japanese]: "顔を覆って見つめる日車 1",
        [Locale.Korean]: "얼굴 가리고 쳐다보는 히구루마 1",
        [Locale.ChineseCN]: "日车掩面凝视 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground],
    width: 975,
    height: 697,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkHigurumaCoveringFaceStare1.png"
                width={975}
                height={547}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
                        fontFamily: font,
                        fontSize: 50,
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
