import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobSacredTextBook: Template = {
    name: "spongebobSacredTextBook",
    displayName: buildLocales("Sacred text book", {
        [Locale.Russian]: "Священная книга",
        [Locale.Ukrainian]: "Священна книга",
        [Locale.Dutch]: "Heilige teksten boek",
        [Locale.French]: "Livre des textes sacrés",
        [Locale.German]: "Buch der heiligen Texte",
        [Locale.Polish]: "Święta księga",
        [Locale.SpanishES]: "Libro de textos sagrados",
        [Locale.SpanishLATAM]: "Libro de textos sagrados",
        [Locale.PortugueseBR]: "Livro de textos sagrados",
        [Locale.Turkish]: "Kutsal metin kitabı",
        [Locale.Italian]: "Libro sacro",
        [Locale.Indonesian]: "Buku teks suci",
        [Locale.Czech]: "Posvátná kniha",
        [Locale.Japanese]: "神聖な書物",
        [Locale.Korean]: "신성한 책",
        [Locale.ChineseCN]: "神圣法典",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground, Type.DefaultText],
    width: 1280,
    height: 1245,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "SpongeBob`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobSacredTextBook.jpg"
                width={1280}
                height={1245}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 200,
                    left: 200,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "25%",
                    bottom: "10%",
                    width: "50%",
                    height: "35%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(3deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
