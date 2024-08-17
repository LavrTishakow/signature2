import { request, gql } from 'graphql-request';

const endpoint = 'https://api.stratz.com/graphql';

export const getWinRates = async (heroId: number) => {
	const query = gql`
        query {
            heroStats(heroId: ${heroId}) {
                winRate
            }
        }
    `;
	const data = await request(endpoint, query);
	return data.heroStats.winRate;
};
