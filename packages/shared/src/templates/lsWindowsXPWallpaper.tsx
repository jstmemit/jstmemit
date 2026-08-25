import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsWindowsXPWallpaper: Template = {
    name: "lsWindowsXPWallpaper",
    displayName: buildLocales("Windows XP wallpaper", {
        [Locale.Russian]: "Обои Windows XP",
        [Locale.Ukrainian]: "Шпалери Windows XP",
        [Locale.Dutch]: "Windows XP achtergrond",
        [Locale.French]: "Fond d'écran Windows XP",
        [Locale.German]: "Windows XP Hintergrundbild",
        [Locale.Polish]: "Tapeta Windows XP",
        [Locale.SpanishES]: "Fondo de pantalla de Windows XP",
        [Locale.SpanishLATAM]: "Fondo de pantalla de Windows XP",
        [Locale.PortugueseBR]: "Papel de parede do Windows XP",
        [Locale.Turkish]: "Windows XP duvar kağıdı",
        [Locale.Italian]: "Sfondo Windows XP",
        [Locale.Indonesian]: "Wallpaper Windows XP",
        [Locale.Czech]: "Tapeta Windows XP",
        [Locale.Japanese]: "Windows XPの壁紙",
        [Locale.Korean]: "Windows XP 배경화면",
        [Locale.ChineseCN]: "Windows XP 壁纸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottom, Type.FaceImage],
    width: 1014,
    height: 788,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "face of Konata Izumi" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/lsWindowsXPWallpaper.png"
                width={1014}
                height={788}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 150,
                    right: 180,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "63%",
                    height: "35%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
