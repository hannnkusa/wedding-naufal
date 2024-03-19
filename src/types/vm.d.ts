interface IHeaderToken {
  accessToken?: string;
}

interface ISignup {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  organizationName: string;
  organizationCode?: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface ITokenData {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  userName: string;
  role: string;
  organizationName: string;
  organizationCode?: string;
  iat: number;
  exp: number;
}

interface IStandardAPIResponse<T = any> {
  isSuccess: boolean;
  success: boolean;
  message: string;
  data: T;
}
