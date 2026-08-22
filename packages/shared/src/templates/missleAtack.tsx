import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const missleAtack: Template = {
    name: "missleAtack",
    displayName: buildLocales("Missile attack", {
        [Locale.Russian]: "Ракетный удар",
        [Locale.Ukrainian]: "Ракетний удар",
        [Locale.Dutch]: "Raketaanval",
        [Locale.French]: "Attaque de missile",
        [Locale.German]: "Raketenangriff",
        [Locale.Polish]: "Atak rakietowy",
        [Locale.SpanishES]: "Ataque con misiles",
        [Locale.SpanishLATAM]: "Ataque con misiles",
        [Locale.PortugueseBR]: "Ataque de míssil",
        [Locale.Turkish]: "Füze saldırısı",
        [Locale.Italian]: "Attacco missilistico",
        [Locale.Indonesian]: "Serangan rudal",
        [Locale.Czech]: "Raketový útok",
        [Locale.Japanese]: "ミサイル攻撃",
        [Locale.Korean]: "미사일 공격",
        [Locale.ChineseCN]: "导弹袭击",
    }),
    topics: [Topic.Destruction],
    types: [Type.BackgroundImage, Type.Animated],
    width: 984,
    height: 720,
    animationDuration: 3600,
    texts: [],
    images: [{ id: 0, description: "background image" }],
    element: ({ images }: TemplateProps) => (
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
                src={images[0]}
                width={984}
                height={720}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/missleAtack.gif"
                width={984}
                height={720}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
        </div>
    ),
};
