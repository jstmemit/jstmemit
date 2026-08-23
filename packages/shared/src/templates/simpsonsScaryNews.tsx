import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsScaryNews: Template = {
    name: "simpsonsScaryNews",
    displayName: buildLocales("Scary news", {
        [Locale.Russian]: "Страшные новости",
        [Locale.Ukrainian]: "Страшні новини",
        [Locale.Dutch]: "Eng nieuws",
        [Locale.French]: "Nouvelles effrayantes",
        [Locale.German]: "Gruselige Nachrichten",
        [Locale.Polish]: "Straszne wiadomości",
        [Locale.SpanishES]: "Noticias de miedo",
        [Locale.SpanishLATAM]: "Noticias de miedo",
        [Locale.PortugueseBR]: "Notícias assustadoras",
        [Locale.Turkish]: "Korkutucu haberler",
        [Locale.Italian]: "Notizie spaventose",
        [Locale.Indonesian]: "Berita menakutkan",
        [Locale.Czech]: "Děsivé zprávy",
        [Locale.Japanese]: "怖いニュース",
        [Locale.Korean]: "무서운 뉴스",
        [Locale.ChineseCN]: "可怕的新闻",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.News, Topic.Reaction],
    types: [Type.ObjectImage, Type.TextCenterWithBackground, Type.TwoOption],
    width: 1280,
    height: 1920,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "scary news" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsScaryNews.jpg"
                width={1280}
                height={1920}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={440}
                height={380}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 180,
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "50%",
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 80,
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
