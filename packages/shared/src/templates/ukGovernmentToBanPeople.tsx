import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ukGovernmentToBanPeople: Template = {
    name: "ukGovernmentToBanPeople",
    displayName: buildLocales("UK government to ban people", {
        [Locale.Russian]: "Правительство Великобритании запретит людей",
        [Locale.Ukrainian]: "Уряд Великобританії заборонить людей",
        [Locale.Dutch]: "Britse regering gaat mensen verbieden",
        [Locale.French]: "Le gouvernement britannique va interdire les gens",
        [Locale.German]: "Britische Regierung verbietet Menschen",
        [Locale.Polish]: "Rząd UK zakaże ludzi",
        [Locale.SpanishES]: "El gobierno del Reino Unido prohibirá a las personas",
        [Locale.SpanishLATAM]: "El gobierno del Reino Unido prohibirá a las personas",
        [Locale.PortugueseBR]: "Governo do Reino Unido vai banir pessoas",
        [Locale.Turkish]: "İngiltere hükümeti insanları yasaklayacak",
        [Locale.Italian]: "Il governo del Regno Unito bandirà le persone",
        [Locale.Indonesian]: "Pemerintah Inggris akan melarang orang",
        [Locale.Czech]: "Britská vláda zakáže lidi",
        [Locale.Japanese]: "イギリス政府が人間を禁止する",
        [Locale.Korean]: "영국 정부 사람들을 금지하다",
        [Locale.ChineseCN]: "英国政府将禁止人类",
    }),
    topics: [Topic.SocialPost],
    types: [Type.ObjectImage, Type.TextPost],
    width: 1468,
    height: 1038,
    texts: [],
    images: [{ id: 0, description: "People who were banned by the UK government" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ukGovernmentToBanPeople.png"
                width={1468}
                height={1038}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={670}
                height={740}
                style={{
                    position: "absolute",
                    top: 205,
                    right: 5,
                    borderBottomRightRadius: 36,
                    borderTopRightRadius: 36,
                }}
            />
        </div>
    ),
};
