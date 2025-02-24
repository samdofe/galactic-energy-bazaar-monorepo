export interface IFedsCoreAuthCredentials {
  email: string;
  password: string;
}

export interface IFedsCoreAuthToken {
  token: string;
}

export interface IFedsCoreAuthMe {
  _id: string,
  userId: string,
  username: string,
  email: string,
  role: string,
  planetId: string,
  createdAt: string,
  updatedAt: string,
}

export interface IFedsCoreAuthState {
  token: string | null;
  isLoading: boolean;
  me: IFedsCoreAuthMe | null;
}
