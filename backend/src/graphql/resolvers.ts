import { getActivitiesByRank } from "../ranker";
import { ActivityScore, RankActivitiesProps } from "./types";

export const resolvers = {
  Query: {
    rankActivities: async (
      _: unknown,
      { city }: RankActivitiesProps
    ): Promise<ActivityScore[]> => {
      return await getActivitiesByRank(city);
    },
  },
};
