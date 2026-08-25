import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobExam: Template = {
    name: "spongebobExam",
    displayName: buildLocales("SpongeBob exam", {
        [Locale.Russian]: "Губка Боб на экзамене",
        [Locale.Ukrainian]: "Губка Боб на іспиті",
        [Locale.Dutch]: "SpongeBob examen",
        [Locale.French]: "Examen de Bob l'éponge",
        [Locale.German]: "SpongeBob Prüfung",
        [Locale.Polish]: "Egzamin SpongeBoba",
        [Locale.SpanishES]: "Examen de Bob Esponja",
        [Locale.SpanishLATAM]: "Examen de Bob Esponja",
        [Locale.PortugueseBR]: "Exame do Bob Esponja",
        [Locale.Turkish]: "SüngerBob sınavda",
        [Locale.Italian]: "Esame di SpongeBob",
        [Locale.Indonesian]: "Ujian SpongeBob",
        [Locale.Czech]: "SpongeBobova zkouška",
        [Locale.Japanese]: "スポンジ・ボブの試験",
        [Locale.Korean]: "스폰지밥 시험",
        [Locale.ChineseCN]: "海绵宝宝考试",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.SpongeBob],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 499,
    height: 458,
    animationDuration: 150,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/spongebobExam.gif"
                width={499}
                height={368}
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
                        fontFamily: font,
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
