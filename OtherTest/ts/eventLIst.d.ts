type StateEvent = {
  cmd: "state"
  state: 0 | 1 | 2 | 3 | 4; // 0: 未开始 1: 进行中 2: 暂停 3: 完成 4: 错误
  timestamp: number; // 毫秒时间戳
  roundIndex: number;
  receivePacketCount?: number; //  state == 2 时，需要赋值
  sendPacketCount?: number; //  state == 2 时，需要赋值
  roundCount?: number; //  state == 2 时，需要赋值
}

type ProblemEvent = {
  cmd: "problem",
  timestamp: number; // 毫秒时间戳
  roundIndex: number;
  problemId: number; // 发现 problem 时 sdk 上报到平台, 获取 problemId
  namePath: string;
  lastRoundTick: string;
  sceneName: string;
  subSceneName: string;
}

// sdk 持有的数据
type EventList = Array<StateEvent | ProblemEvent>;