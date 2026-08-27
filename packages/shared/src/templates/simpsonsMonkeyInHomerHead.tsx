import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsMonkeyInHomerHead: Template = {
    name: "simpsonsMonkeyInHomerHead",
    displayName: buildLocales("Monkey in Homer head", {
        [Locale.Russian]: "Обезьяна в голове Гомера",
        [Locale.Ukrainian]: "Мавпа в голові Гомера",
        [Locale.Dutch]: "Aap in hoofd van Homer",
        [Locale.French]: "Singe dans la tête d'Homer",
        [Locale.German]: "Affe in Homers Kopf",
        [Locale.Polish]: "Małpa w głowie Homera",
        [Locale.SpanishES]: "Mono en la cabeza de Homer",
        [Locale.SpanishLATAM]: "Mono en la cabeza de Homero",
        [Locale.PortugueseBR]: "Macaco na cabeça de Homer",
        [Locale.Turkish]: "Homer'ın kafasındaki maymun",
        [Locale.Italian]: "Scimmia nella testa di Homer",
        [Locale.Indonesian]: "Monyet di kepala Homer",
        [Locale.Czech]: "Opice v Homerově hlavě",
        [Locale.Japanese]: "ホーマーの頭の中の猿",
        [Locale.Korean]: "호머 머릿속 원숭이",
        [Locale.ChineseCN]: "霍默脑子里的猴子",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.ObjectImage, Type.TextBottomWithBackground],
    width: 450,
    height: 490,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "face of monkey in Homer`s head" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsMonkeyInHomerHead.jpg"
                width={450}
                height={390}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 30,
                    left: 160,
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
