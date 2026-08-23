import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenFlammeShowingSerieDrawing: Template = {
    name: "frierenFlammeShowingSerieDrawing",
    displayName: buildLocales("Flamme showing Serie drawing", {
        [Locale.Russian]: "Фламме показывает рисунок Зерие",
        [Locale.Ukrainian]: "Фламме показує малюнок Зеріє",
        [Locale.Dutch]: "Flamme toont Serie tekening",
        [Locale.French]: "Flamme montrant le dessin de Serie",
        [Locale.German]: "Flamme zeigt die Zeichnung von Serie",
        [Locale.Polish]: "Flamme pokazuje rysunek Serie",
        [Locale.SpanishES]: "Flamme mostrando el dibujo de Serie",
        [Locale.SpanishLATAM]: "Flamme mostrando el dibujo de Serie",
        [Locale.PortugueseBR]: "Flamme mostrando o desenho de Serie",
        [Locale.Turkish]: "Flamme Serie'nin çizimini gösteriyor",
        [Locale.Italian]: "Flamme mostra il disegno di Serie",
        [Locale.Indonesian]: "Flamme menunjukkan gambar Serie",
        [Locale.Czech]: "Flamme ukazuje kresbu Serie",
        [Locale.Japanese]: "ゼーリエの絵を見せるフランメ",
        [Locale.Korean]: "제리에의 그림을 보여주는 플람메",
        [Locale.ChineseCN]: "弗兰梅展示赛莉耶的画",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.FaceImage],
    width: 1080,
    height: 1530,
    texts: [],
    images: [
        { id: 0, description: "Flamme's face" },
        { id: 1, description: "Serie's face" },
    ],
    element: ({ images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenFlammeShowingSerieDrawing.png"
                width={1080}
                height={1530}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 180,
                    left: 220,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 500,
                    left: 250,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: 350,
                    left: 440,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
