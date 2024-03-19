import { httpClient } from "../utils/utils";

export async function signupToApp(
  cred: ISignup
): Promise<IStandardAPIResponse<string>> {
  try {
    const res = await httpClient<string>(`signup`, "POST", cred);
    return res;
  } catch (err: any) {
    return err && err.response ? err.response.data : undefined;
  }
}

export async function loginToApp(
  cred: ILogin
): Promise<IStandardAPIResponse<string>> {
  try {
    const res = await httpClient<string>(`login`, "POST", cred);
    return res;
  } catch (err: any) {
    return err && err.response ? err.response.data : undefined;
  }
}
