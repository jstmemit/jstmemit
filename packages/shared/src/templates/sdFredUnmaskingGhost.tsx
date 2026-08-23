import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const sdFredUnmaskingGhost: Template = {
    name: "sdFredUnmaskingGhost",
    displayName: buildLocales("Fred unmasking ghost", {
        [Locale.Russian]: "Фред снимает маску с призрака",
        [Locale.Ukrainian]: "Фред знімає маску з привида",
        [Locale.Dutch]: "Fred ontmaskert spook",
        [Locale.French]: "Fred démasquant le fantôme",
        [Locale.German]: "Fred entlarvt Geist",
        [Locale.Polish]: "Fred demaskujący ducha",
        [Locale.SpanishES]: "Fred desenmascarando al fantasma",
        [Locale.SpanishLATAM]: "Fred desenmascarando al fantasma",
        [Locale.PortugueseBR]: "Fred desmascarando o fantasma",
        [Locale.Turkish]: "Hayaletin maskesini çıkaran Fred",
        [Locale.Italian]: "Fred che smaschera il fantasma",
        [Locale.Indonesian]: "Fred membuka topeng hantu",
        [Locale.Czech]: "Fred demaskuje ducha",
        [Locale.Japanese]: "フレッド 幽霊のマスクを剥がす",
        [Locale.Korean]: "유령 가면 벗기는 프레드",
        [Locale.ChineseCN]: "弗雷德揭开鬼魂面具",
    }),
    topics: [Topic.Cartoons, Topic.ScoobyDoo],
    types: [Type.FaceImage, Type.TextBottom, Type.TwoOption],
    width: 474,
    height: 632,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Fred`s face" },
        { id: 1, description: "Villain face" },
    ],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sdFredUnmaskingGhost.jpg"
                width={474}
                height={632}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "8%",
                    right: "10%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "30%",
                    right: "10%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "15%",
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
