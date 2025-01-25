export interface ILeaderboard {
  planetLeaderboard : ILeaderEntity[],
  traderLeaderboard : ILeaderEntity[]
}

export interface ILeaderEntity {
  tradeCount: number,
  id: string,
  name: string
}
