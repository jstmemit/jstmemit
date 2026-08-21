import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkHigurumaCoveringFace: Template = {
    name: "jkHigurumaCoveringFace",
    displayName: buildLocales("Higuruma covering his face", {
        [Locale.Russian]: "Хигурума закрывает лицо",
        [Locale.Ukrainian]: "Хігурума закриває обличчя",
        [Locale.Dutch]: "Higuruma bedekt zijn gezicht",
        [Locale.French]: "Higuruma se couvrant le visage",
        [Locale.German]: "Higuruma verdeckt sein Gesicht",
        [Locale.Polish]: "Higuruma zasłaniający twarz",
        [Locale.SpanishES]: "Higuruma cubriéndose la cara",
        [Locale.SpanishLATAM]: "Higuruma cubriéndose el rostro",
        [Locale.PortugueseBR]: "Higuruma cobrindo o rosto",
        [Locale.Turkish]: "Yüzünü kapatan Higuruma",
        [Locale.Italian]: "Higuruma si copre il volto",
        [Locale.Indonesian]: "Higuruma menutupi wajahnya",
        [Locale.Czech]: "Higuruma si zakrývá tvář",
        [Locale.Japanese]: "顔を覆う日車",
        [Locale.Korean]: "얼굴을 가린 히구루마",
        [Locale.ChineseCN]: "捂住脸的日车",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 510,
    height: 540,
    animationDuration: 3360,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/jkHigurumaCoveringFace.gif"
                width={510}
                height={450}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
        </div>
    ),
};
