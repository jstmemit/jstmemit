export const Topic = {
    Reaction: "reaction",
    SocialPost: "social_post",
    BreakingBad: "breaking_bad",
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
    PulpFiction: "pulp_fiction",
    Anime: "anime",
    TeamFortress2: "tf2",
    Games: "games",
    SpongeBob: "sponge_bob",
    SpiderMan: "spider_man",
    StarTrek: "star_trek",
} as const;

export type TemplateTopic = (typeof Topic)[keyof typeof Topic];
