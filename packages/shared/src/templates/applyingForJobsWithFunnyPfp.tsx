import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const applyingForJobsWithFunnyPfp: Template = {
    name: "applyingForJobsWithFunnyPfp",
    displayName: buildLocales("Applying for jobs with funny pfp", {
        [Locale.Russian]: "Отклик на вакансию со смешной аватаркой",
        [Locale.Ukrainian]: "Відгук на вакансію зі смішною аватаркою",
        [Locale.Dutch]: "Solliciteren met een grappige profielfoto",
        [Locale.French]: "Postuler à des emplois avec une drôle de photo de profil",
        [Locale.German]: "Bewerben auf Jobs mit lustigem Profilbild",
        [Locale.Polish]: "Aplikowanie o pracę ze śmiesznym profilowym",
        [Locale.SpanishES]: "Buscando trabajo con foto de perfil graciosa",
        [Locale.SpanishLATAM]: "Buscando trabajo con foto de perfil graciosa",
        [Locale.PortugueseBR]: "Candidatando-se a vagas com foto de perfil engraçada",
        [Locale.Turkish]: "Komik profil fotoğrafıyla işe başvurmak",
        [Locale.Italian]: "Candidarsi per un lavoro con una foto profilo divertente",
        [Locale.Indonesian]: "Melamar pekerjaan dengan foto profil lucu",
        [Locale.Czech]: "Hledání práce se vtipnou profilovkou",
        [Locale.Japanese]: "面白いアイコンで求人に応募する",
        [Locale.Korean]: "웃긴 프사로 구직하기",
        [Locale.ChineseCN]: "带着搞笑头像求职",
    }),
    topics: [Topic.SocialPost],
    types: [Type.TextName, Type.TextPost, Type.ObjectImage, Type.AvatarImage],
    width: 933,
    height: 1051,
    texts: [
        { id: 0, description: "post author's name", minLength: 1, maxLength: 2 },
        { id: 1, description: "post author's tag", minLength: 1, maxLength: 1 },
    ],
    images: [{ id: 0, description: "Inappropriate profile picture" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={750}
                height={750}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/applyingForJobsWithFunnyPfp.png"
                width={933}
                height={1051}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 110,
                    top: 0,
                    width: "100%",
                    maxWidth: "59%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 40,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#fff",
                    wordBreak: "break-word",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {texts[0]}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 110,
                    top: 55,
                    width: "100%",
                    maxWidth: "60%",
                    padding: "10px",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    display: "flex",
                    fontFamily: "Comic Sans MS",
                    fontSize: 35,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#808080",
                    wordBreak: "break-word",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                @{texts[1]}
            </div>
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: 24,
                }}
            />
        </div>
    ),
};
