import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsMoeKickingOutBarney: Template = {
    name: "simpsonsMoeKickingOutBarney",
    displayName: buildLocales("Moe kicking out Barney", {
        [Locale.Russian]: "Мо выкидывает Барни",
        [Locale.Ukrainian]: "Мо викидає Барні",
        [Locale.Dutch]: "Moe schopt Barney eruit",
        [Locale.French]: "Moe jette Barney",
        [Locale.German]: "Moe wirft Barney raus",
        [Locale.Polish]: "Moe wyrzuca Barneya",
        [Locale.SpanishES]: "Moe echando a Barney",
        [Locale.SpanishLATAM]: "Moe echando a Barney",
        [Locale.PortugueseBR]: "Moe expulsando o Barney",
        [Locale.Turkish]: "Moe Barney'i dışarı atıyor",
        [Locale.Italian]: "Moe caccia fuori Barney",
        [Locale.Indonesian]: "Moe mengusir Barney",
        [Locale.Czech]: "Moe vyhazuje Barneyho",
        [Locale.Japanese]: "バーニーを追い出すモー",
        [Locale.Korean]: "바니를 내쫓는 모",
        [Locale.ChineseCN]: "莫伊把巴尼扔出去",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.ThreeOption],
    width: 1470,
    height: 2506,
    texts: [],
    images: [
        { id: 0, description: "Moe`s face" },
        { id: 1, description: "Barney`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsMoeKickingOutBarney.jpg"
                width={1470}
                height={2506}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 350,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 350,
                    right: 170,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    top: 950,
                    left: 600,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={370}
                height={370}
                style={{
                    position: "absolute",
                    bottom: 360,
                    left: 600,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 300,
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
