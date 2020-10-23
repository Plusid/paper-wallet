import { IToken } from "./interfaces";

export const tokens: Record<string, IToken> = {
    inf: {
        name: "INF",
        networks: {
            mainnet: {
                addressPrefix: 123,
                wif: 100,
            },
            devnet: {
                addressPrefix: 137,
                wif: 100,
            },
        },
    },
};
