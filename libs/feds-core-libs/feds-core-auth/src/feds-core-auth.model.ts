export interface IFedsCoreAuthCredentials {
  username: string;
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
  isLoading: boolean;
  token: string | null;
  user: IFedsCoreAuthMe | null;
}
