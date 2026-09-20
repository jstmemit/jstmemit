import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaAngryCrying1: Template = {
    name: "gdoSataniaAngryCrying1",
    displayName: buildLocales("Satania crying angrily 1", {
        [Locale.Russian]: "Сатания злобно плачет 1",
        [Locale.Ukrainian]: "Сатанія злісно плаче 1",
        [Locale.Dutch]: "Satania huilt boos 1",
        [Locale.French]: "Satania qui pleure de colère 1",
        [Locale.German]: "Satania weint wütend 1",
        [Locale.Polish]: "Satania płacze ze złości 1",
        [Locale.SpanishES]: "Satania llorando de enfado 1",
        [Locale.SpanishLATAM]: "Satania llorando de enojo 1",
        [Locale.PortugueseBR]: "Satania chorando de raiva 1",
        [Locale.Turkish]: "Satania öfkeyle ağlıyor 1",
        [Locale.Italian]: "Satania che piange arrabbiata 1",
        [Locale.Indonesian]: "Satania menangis dengan marah 1",
        [Locale.Czech]: "Satania naštvaně pláče 1",
        [Locale.Japanese]: "怒り泣きするサターニャ 1",
        [Locale.Korean]: "화내며 우는 사타냐 1",
        [Locale.ChineseCN]: "萨塔妮亚气哭 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground],
    width: 600,
    height: 408,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaAngryCrying1.png"
                width={600}
                height={318}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
