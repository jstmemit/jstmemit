import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tsAngryKenClapping: Template = {
    name: "tsAngryKenClapping",
    displayName: buildLocales("Angry Ken clapping", {
        [Locale.Russian]: "Злой Кен хлопает",
        [Locale.Ukrainian]: "Злий Кен плескає",
        [Locale.Dutch]: "Boze Ken klapt",
        [Locale.French]: "Ken en colère qui applaudit",
        [Locale.German]: "Wütender Ken klatscht",
        [Locale.Polish]: "Zły Ken klaszcze",
        [Locale.SpanishES]: "Ken enfadado aplaudiendo",
        [Locale.SpanishLATAM]: "Ken enojado aplaudiendo",
        [Locale.PortugueseBR]: "Ken irritado aplaudindo",
        [Locale.Turkish]: "Kızgın Ken alkışlıyor",
        [Locale.Italian]: "Ken arrabbiato che applaude",
        [Locale.Indonesian]: "Ken bertepuk tangan dengan marah",
        [Locale.Czech]: "Naštvaný Ken tleská",
        [Locale.Japanese]: "怒って拍手するケン",
        [Locale.Korean]: "화내며 박수치는 켄",
        [Locale.ChineseCN]: "生气的肯鼓掌",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.ToyStory],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1096,
    height: 720,
    animationDuration: 320,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tsAngryKenClapping.gif"
                width={548}
                height={720}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "#0e0a04",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
