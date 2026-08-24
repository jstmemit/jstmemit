import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const newsReporterSitting: Template = {
    name: "newsReporterSitting",
    displayName: buildLocales("News reporter sitting", {
        [Locale.Russian]: "Сидящий репортер",
        [Locale.Ukrainian]: "Репортер, що сидить",
        [Locale.Dutch]: "Zittende nieuwslezer",
        [Locale.French]: "Journaliste assis",
        [Locale.German]: "Sitzender Nachrichtenreporter",
        [Locale.Polish]: "Siedzący reporter wiadomości",
        [Locale.SpanishES]: "Reportero de noticias sentado",
        [Locale.SpanishLATAM]: "Reportero de noticias sentado",
        [Locale.PortugueseBR]: "Repórter de notícias sentado",
        [Locale.Turkish]: "Oturan haber muhabiri",
        [Locale.Italian]: "Giornalista seduto",
        [Locale.Indonesian]: "Reporter berita duduk",
        [Locale.Czech]: "Sedící reportér",
        [Locale.Japanese]: "座っているニュースレポーター",
        [Locale.Korean]: "앉아있는 뉴스 리포터",
        [Locale.ChineseCN]: "坐着的新闻记者",
    }),
    topics: [Topic.News],
    types: [Type.TextBottom, Type.TextTop, Type.BackgroundImage],
    width: 766,
    height: 496,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 8 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 8 },
    ],
    images: [{ id: 0, description: "breaking news" }],
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
                src={images[0]}
                width={766}
                height={496}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/newsreportersitting.png"
                width={766}
                height={496}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
