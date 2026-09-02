import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tsAngryKenClapping1: Template = {
    name: "tsAngryKenClapping1",
    displayName: buildLocales("Angry Ken clapping 1", {
        [Locale.Russian]: "Злой Кен хлопает 1",
        [Locale.Ukrainian]: "Злий Кен плескає 1",
        [Locale.Dutch]: "Boze Ken klapt 1",
        [Locale.French]: "Ken en colère qui applaudit 1",
        [Locale.German]: "Wütender Ken klatscht 1",
        [Locale.Polish]: "Zły Ken klaszcze 1",
        [Locale.SpanishES]: "Ken enfadado aplaudiendo 1",
        [Locale.SpanishLATAM]: "Ken enojado aplaudiendo 1",
        [Locale.PortugueseBR]: "Ken irritado aplaudindo 1",
        [Locale.Turkish]: "Kızgın Ken alkışlıyor 1",
        [Locale.Italian]: "Ken arrabbiato che applaude 1",
        [Locale.Indonesian]: "Ken bertepuk tangan dengan marah 1",
        [Locale.Czech]: "Naštvaný Ken tleská 1",
        [Locale.Japanese]: "怒って拍手するケン 1",
        [Locale.Korean]: "화내며 박수치는 켄 1",
        [Locale.ChineseCN]: "生气的肯鼓掌 1",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.ToyStory],
    types: [Type.TextRightWithBackground, Type.Animated, Type.FaceImage],
    width: 1096,
    height: 720,
    animationDuration: 320,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Ken`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tsAngryKenClapping.gif"
                width={548}
                height={720}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={310}
                height={310}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 120,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    padding: "30px",
                    backgroundColor: "#0e0a04",
                }}
            >
                <div
                    style={{
                        lineClamp: 9,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
