import { gql } from "apollo-server";

export const typeDefs = gql`
  type ActivityScore {
    activity: String!
    score: Float!
  }

  type Query {
    rankActivities(city: String!): [ActivityScore!]!
  }
`;
