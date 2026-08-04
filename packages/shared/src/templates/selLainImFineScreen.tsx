import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const selLainImFineScreen: Template = {
    name: "selLainImFineScreen",
    displayName: buildLocales("Lain I'm fine screen", {
        [Locale.Russian]: 'Лэйн: экран "Я в порядке"',
        [Locale.Ukrainian]: 'Лейн: екран "Я в порядку"',
        [Locale.Dutch]: "Lain ik ben in orde scherm",
        [Locale.French]: "Lain écran je vais bien",
        [Locale.German]: "Lain mir gehts gut Bildschirm",
        [Locale.Polish]: "Lain ekran nic mi nie jest",
        [Locale.SpanishES]: "Lain pantalla estoy bien",
        [Locale.SpanishLATAM]: "Lain pantalla estoy bien",
        [Locale.PortugueseBR]: "Lain tela estou bem",
        [Locale.Turkish]: "Lain iyiyim ekranı",
        [Locale.Italian]: "Lain schermo sto bene",
        [Locale.Indonesian]: "Lain layar aku baik-baik saja",
        [Locale.Czech]: "Lain obrazovka jsem v pohodě",
        [Locale.Japanese]: "玲音 私は大丈夫 画面",
        [Locale.Korean]: "레인 난 괜찮아 화면",
        [Locale.ChineseCN]: "玲音 屏幕上我很好",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 736,
    height: 721,
    texts: [],
    images: [{ id: 0, description: "PC screen" }],
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
                width={320}
                height={320}
                style={{
                    position: "absolute",
                    top: 80,
                    right: 90,
                    objectFit: "cover",
                    transform: "rotate(3deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/selLainImFineScreen.png"
                width={736}
                height={721}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
        </div>
    ),
};
