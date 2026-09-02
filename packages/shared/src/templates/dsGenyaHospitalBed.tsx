import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dsGenyaHospitalBed: Template = {
    name: "dsGenyaHospitalBed",
    displayName: buildLocales("Genya hospital bed", {
        [Locale.Russian]: "Генья на больничной койке",
        [Locale.Ukrainian]: "Ґенья на лікарняному ліжку",
        [Locale.Dutch]: "Genya in ziekenhuisbed",
        [Locale.French]: "Genya sur son lit d'hôpital",
        [Locale.German]: "Genya im Krankenhausbett",
        [Locale.Polish]: "Genya w łóżku szpitalnym",
        [Locale.SpanishES]: "Genya en la cama del hospital",
        [Locale.SpanishLATAM]: "Genya en la cama del hospital",
        [Locale.PortugueseBR]: "Genya na cama do hospital",
        [Locale.Turkish]: "Genya hastane yatağında",
        [Locale.Italian]: "Genya nel letto d'ospedale",
        [Locale.Indonesian]: "Genya di ranjang rumah sakit",
        [Locale.Czech]: "Genya na nemocničním lůžku",
        [Locale.Japanese]: "病院のベッドの玄弥",
        [Locale.Korean]: "병원 침대의 겐야",
        [Locale.ChineseCN]: "玄弥躺在病床上",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsGenyaHospitalBed.png"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
