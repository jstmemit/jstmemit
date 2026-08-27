import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobLongTodoList: Template = {
    name: "spongebobLongTodoList",
    displayName: buildLocales("Long todo list", {
        [Locale.Russian]: "Длинный список дел",
        [Locale.Ukrainian]: "Довгий список справ",
        [Locale.Dutch]: "Lange to-do lijst",
        [Locale.French]: "Longue liste de choses à faire",
        [Locale.German]: "Lange To-Do-Liste",
        [Locale.Polish]: "Długa lista rzeczy do zrobienia",
        [Locale.SpanishES]: "Larga lista de tareas",
        [Locale.SpanishLATAM]: "Larga lista de quehaceres",
        [Locale.PortugueseBR]: "Lista de tarefas longa",
        [Locale.Turkish]: "Uzun yapılacaklar listesi",
        [Locale.Italian]: "Lunga lista di cose da fare",
        [Locale.Indonesian]: "Daftar tugas panjang",
        [Locale.Czech]: "Dlouhý seznam úkolů",
        [Locale.Japanese]: "長いToDoリスト",
        [Locale.Korean]: "긴 할 일 목록",
        [Locale.ChineseCN]: "长长的待办事项清单",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 1000,
    height: 991,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobLongTodoList.png"
                width={1000}
                height={991}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
