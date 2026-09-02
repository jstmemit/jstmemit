import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dhGirlWithHandOverMouth: Template = {
    name: "dhGirlWithHandOverMouth",
    displayName: buildLocales("Girl with hand over mouth", {
        [Locale.Russian]: "Девушка прикрывает рот рукой",
        [Locale.Ukrainian]: "Дівчина прикриває рот рукою",
        [Locale.Dutch]: "Meisje met hand voor mond",
        [Locale.French]: "Fille avec la main sur la bouche",
        [Locale.German]: "Mädchen mit Hand vor dem Mund",
        [Locale.Polish]: "Dziewczyna z dłonią na ustach",
        [Locale.SpanishES]: "Chica con la mano en la boca",
        [Locale.SpanishLATAM]: "Chica con la mano en la boca",
        [Locale.PortugueseBR]: "Garota com a mão na boca",
        [Locale.Turkish]: "Elini ağzına götüren kız",
        [Locale.Italian]: "Ragazza con la mano sulla bocca",
        [Locale.Indonesian]: "Gadis menutup mulut dengan tangan",
        [Locale.Czech]: "Dívka s rukou na ústech",
        [Locale.Japanese]: "口元を手で覆う女の子",
        [Locale.Korean]: "입을 손으로 가리는 소녀",
        [Locale.ChineseCN]: "女孩捂嘴",
    }),
    topics: [Topic.Misc],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 718,
    height: 1131,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "doctor House`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dhGirlWithHandOverMouth.jpg"
                width={718}
                height={1131}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{
                    position: "absolute",
                    top: "21%",
                    right: "-20%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "13%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
