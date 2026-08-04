import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const post: Template = {
    name: "post",
    displayName: buildLocales("Post", {
        [Locale.Russian]: "Пост",
        [Locale.Ukrainian]: "Пост",
        [Locale.Dutch]: "Post",
        [Locale.French]: "Publication",
        [Locale.German]: "Beitrag",
        [Locale.Polish]: "Post",
        [Locale.SpanishES]: "Publicación",
        [Locale.SpanishLATAM]: "Publicación",
        [Locale.PortugueseBR]: "Postagem",
        [Locale.Turkish]: "Gönderi",
        [Locale.Italian]: "Post",
        [Locale.Indonesian]: "Postingan",
        [Locale.Czech]: "Příspěvek",
        [Locale.Japanese]: "投稿",
        [Locale.Korean]: "게시물",
        [Locale.ChineseCN]: "帖子",
    }),
    topics: [Topic.SocialPost],
    types: [Type.TextPost, Type.TextName, Type.AvatarImage],
    width: 1108,
    height: 772,
    texts: [
        { id: 0, description: "post author's name", minLength: 1, maxLength: 4 },
        { id: 1, description: "post text", minLength: 5, maxLength: 20 },
    ],
    images: [{ id: 0, description: "post author's profile picture" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/post.png"
                width={1108}
                height={772}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderColor: "#1b1b1a",
                    borderWidth: 24,
                    borderRadius: 80,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "15%",
                    top: "5%",
                    width: "70%",
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
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
                    height: "75%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 85,
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
