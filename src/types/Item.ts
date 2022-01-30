import { GameToken } from "../generated/graphql";

export type Item = {
  id: number;
  game: GameToken;
  pattern: string;
  repositoryOwner: string;
  repositoryName: string;
};
