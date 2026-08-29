import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const toradoraMinoriAndTaigaCryingSalute: Template = {
    name: "toradoraMinoriAndTaigaCryingSalute",
    displayName: buildLocales("Minori and Taiga crying salute", {
        [Locale.Russian]: "Минори и Тайга отдают честь со слезами",
        [Locale.Ukrainian]: "Мінорі та Тайга віддають честь зі сльозами",
        [Locale.Dutch]: "Minori en Taiga huilend salueren",
        [Locale.French]: "Minori et Taiga saluant en pleurant",
        [Locale.German]: "Minori und Taiga salutieren weinend",
        [Locale.Polish]: "Płaczące Minori i Taiga salutują",
        [Locale.SpanishES]: "Minori y Taiga saludando llorando",
        [Locale.SpanishLATAM]: "Minori y Taiga saludando llorando",
        [Locale.PortugueseBR]: "Minori e Taiga saudando e chorando",
        [Locale.Turkish]: "Ağlayarak selam veren Minori ve Taiga",
        [Locale.Italian]: "Minori e Taiga che salutano piangendo",
        [Locale.Indonesian]: "Minori dan Taiga menangis memberi hormat",
        [Locale.Czech]: "Plačící Minori a Taiga salutují",
        [Locale.Japanese]: "泣きながら敬礼する実乃梨と大河",
        [Locale.Korean]: "울면서 경례하는 미노리와 타이가",
        [Locale.ChineseCN]: "实乃梨和大河哭着敬礼",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextBottom],
    width: 1080,
    height: 727,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraMinoriAndTaigaCryingSalute.png"
                width={1080}
                height={727}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
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
