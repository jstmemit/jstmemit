import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";

export const cinemaGuys: Template = {
    name: "cinemaGuys",
    width: 1280,
    height: 947,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 20 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 20 },
    ],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Impact",
            }}
        >
            <img
                src="https://files.wideunits.nl/jstmemit/images/templates/cinemaGuys.png"
                width={1280}
                height={947}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 8,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        color: "#000000",
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
                    width: "50%",
                    height: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 8,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
