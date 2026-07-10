export const Type = {
    textTop: "textTop",
    textBottom: "textBottom",
    textLeft: "textLeft",
    textRight: "textRight",
    textCenter: "textCenter",
    textTopWithBackground: "textTopWithBackground",
    textBottomWithBackground: "textBottomWithBackground",
    textLeftWithBackground: "textLeftWithBackground",
    textRightWithBackground: "textRightWithBackground",
    textCenterWithBackground: "textCenterWithBackground",
    textName: "textName",
    textPost: "textPost",
    defaultText: "defaultText",
    avatarImage: "avatarImage",
    faceImage: "faceImage",
    objectImage: "objectImage",
    backgroundImage: "backgroundImage",
    twoOption: "twoOption",
    threeOption: "threeOption",
    fourOption: "fourOption",
} as const;

export type TemplateType = (typeof Type)[keyof typeof Type];
