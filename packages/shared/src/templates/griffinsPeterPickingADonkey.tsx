import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterPickingADonkey: Template = {
    name: "griffinsPeterPickingADonkey",
    displayName: buildLocales("Peter picking a donkey", {
        [Locale.Russian]: "Питер выбирает осла",
        [Locale.Ukrainian]: "Пітер обирає віслюка",
        [Locale.Dutch]: "Peter kiest een ezel",
        [Locale.French]: "Peter choisit un âne",
        [Locale.German]: "Peter wählt einen Esel",
        [Locale.Polish]: "Peter wybiera osła",
        [Locale.SpanishES]: "Peter eligiendo un burro",
        [Locale.SpanishLATAM]: "Peter eligiendo un burro",
        [Locale.PortugueseBR]: "Peter escolhendo um burro",
        [Locale.Turkish]: "Peter bir eşek seçiyor",
        [Locale.Italian]: "Peter sceglie un asino",
        [Locale.Indonesian]: "Peter memilih keledai",
        [Locale.Czech]: "Peter si vybírá osla",
        [Locale.Japanese]: "ロバを選ぶピーター",
        [Locale.Korean]: "당나귀를 고르는 피터",
        [Locale.ChineseCN]: "彼得挑驴",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextBottom, Type.FaceImage],
    width: 1355,
    height: 914,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Peter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterPickingADonkey.png"
                width={1355}
                height={914}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: "13%",
                    left: "22%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
