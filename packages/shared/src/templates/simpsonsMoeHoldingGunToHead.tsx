import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsMoeHoldingGunToHead: Template = {
    name: "simpsonsMoeHoldingGunToHead",
    displayName: buildLocales("Moe holding gun to head", {
        [Locale.Russian]: "Мо приставил пистолет к голове",
        [Locale.Ukrainian]: "Мо приставив пістолет до голови",
        [Locale.Dutch]: "Moe houdt pistool tegen hoofd",
        [Locale.French]: "Moe tenant une arme sur la tête",
        [Locale.German]: "Moe hält sich Waffe an den Kopf",
        [Locale.Polish]: "Moe trzymający pistolet przy głowie",
        [Locale.SpanishES]: "Moe con un arma en la cabeza",
        [Locale.SpanishLATAM]: "Moe con un arma en la cabeza",
        [Locale.PortugueseBR]: "Moe apontando arma para a cabeça",
        [Locale.Turkish]: "Moe kafasına silah dayıyor",
        [Locale.Italian]: "Moe si punta una pistola alla testa",
        [Locale.Indonesian]: "Moe menodongkan pistol ke kepala",
        [Locale.Czech]: "Moe drží zbraň u hlavy",
        [Locale.Japanese]: "銃を頭に当てるモー",
        [Locale.Korean]: "머리에 총을 겨눈 모",
        [Locale.ChineseCN]: "莫伊拿枪指着头",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 500,
    height: 477,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Moe`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsMoeHoldingGunToHead.jpg"
                width={500}
                height={377}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{
                    position: "absolute",
                    top: 60,
                    left: 190,
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
                    height: "100px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
