import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const soGladIGrewUpWithThis: Template = {
    name: "soGladIGrewUpWithThis",
    displayName: buildLocales("So glad I grew up with this", {
        [Locale.Russian]: "Так рад, что вырос на этом",
        [Locale.Ukrainian]: "Такий радий, що виріс на цьому",
        [Locale.Dutch]: "Zo blij dat ik hiermee ben opgegroeid",
        [Locale.French]: "Si heureux d'avoir grandi avec ça",
        [Locale.German]: "So froh, dass ich damit aufgewachsen bin",
        [Locale.Polish]: "Tak się cieszę, że na tym dorastałem",
        [Locale.SpanishES]: "Qué alegría haber crecido con esto",
        [Locale.SpanishLATAM]: "Qué alegría haber crecido con esto",
        [Locale.PortugueseBR]: "Tão feliz por ter crescido com isso",
        [Locale.Turkish]: "Bununla büyüdüğüm için çok mutluyum",
        [Locale.Italian]: "Così felice di essere cresciuto con questo",
        [Locale.Indonesian]: "Sangat senang aku tumbuh dengan ini",
        [Locale.Czech]: "Jsem tak rád, že jsem na tomhle vyrostl",
        [Locale.Japanese]: "これで育って本当によかった",
        [Locale.Korean]: "이걸 보고 자라서 너무 다행이야",
        [Locale.ChineseCN]: "很高兴我是看这个长大的",
    }),
    topics: [Topic.Misc],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 1313,
    height: 790,
    texts: [],
    images: [
        { id: 0, description: "Old good thing" },
        { id: 1, description: "New bad thing" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/soGladIGrewUpWithThis.png"
                width={1313}
                height={790}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={450}
                height={450}
                style={{
                    position: "absolute",
                    top: 180,
                    left: 110,
                    borderRadius: 24,
                }}
            />
            <img
                src={images[1]}
                width={450}
                height={450}
                style={{
                    position: "absolute",
                    top: 180,
                    right: 95,
                    borderRadius: 24,
                }}
            />
        </div>
    ),
};
