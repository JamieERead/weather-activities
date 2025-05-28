import { gql } from "@apollo/client";

export const RANK_ACTIVITIES = gql`
  query RankActivities($city: String!) {
    rankActivities(city: $city) {
      activity
      score
    }
  }
`;
