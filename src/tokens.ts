import { IToken } from "./interfaces";

export const tokens: Record<string, IToken> = {
    infi: {
        name: "INFI",
        networks: {
            mainnet: {
                addressPrefix: 38,
                wif: 104,
            },
        },
    },
};
