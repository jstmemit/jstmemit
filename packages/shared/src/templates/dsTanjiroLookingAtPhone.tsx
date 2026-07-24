import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";

export const dsTanjiroLookingAtPhone: Template = {
    name: "dsTanjiroLookingAtPhone",
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer, Topic.SocialPost],
    types: [Type.textPost, Type.textName, Type.avatarImage, Type.defaultText],
    width: 400,
    height: 400,
    texts: [
        { id: 0, description: "nickname", minLength: 1, maxLength: 5 },
        { id: 1, description: "tag", minLength: 1, maxLength: 5 },
        { id: 2, description: "post", minLength: 1, maxLength: 12 },
    ],
    images: [{ id: 0, description: "user avatar" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55/https://files.wideunits.nl/jstmemit/images/templates/dsTanjiroLookingAtPhone.png"
                width={400}
                height={400}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 6,
                    left: 11,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "16%",
                    top: "3%",
                    width: "70%",
                    height: "4%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "16%",
                    top: "8%",
                    width: "70%",
                    height: "4%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 1,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 15,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#58585b",
                    }}
                >
                    {`@${texts[1]}`}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "3%",
                    top: "17%",
                    width: "85%",
                    height: "19%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 20,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#cbcbcb",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
