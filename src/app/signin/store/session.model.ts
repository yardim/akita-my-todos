export interface SessionState {
  username: string;
  password: string;
}

export function createInitialSessionState(): SessionState {
  return {
    username: 'test',
    password: 'test',
  };
}
