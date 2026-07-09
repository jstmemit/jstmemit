export const Topic = {
    Reaction: "reaction",
    SocialPost: "socialPost",
    BreakingBad: "breakingBad",
    News: "news",
    YouTube: "youtube",
    Misc: "misc",
    Cartoons: "cartoons",
    Animals: "animals",
    Futurama: "futurama",
    Griffins: "griffins",
    Simpsons: "simpsons",
    Movies: "movies",
    Art: "art",
    PulpFiction: "pulpFiction",
    Anime: "anime",
    TeamFortress2: "teamFortress2",
    Games: "games",
    SpongeBob: "spongeBob",
    SpiderMan: "spiderMan",
    StarTrek: "starTrek",
} as const;

export type TemplateTopic = (typeof Topic)[keyof typeof Topic];
