import { IToken } from "./interfaces";

export const tokens: Record<string, IToken> = {
    inf: {
        name: "INFI",
        networks: {
            mainnet: {
                addressPrefix: 38,
                wif: 104,
            },
            devnet: {
                addressPrefix: 137,
                wif: 104,
            },
        },
    },
};
