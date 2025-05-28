import { getActivitiesByRank } from "./services/weather";

export const resolvers = {
  Query: {
    rankActivities: async (_: any, { city }: { city: string }) => {
      return await getActivitiesByRank(city);
    },
  },
};
