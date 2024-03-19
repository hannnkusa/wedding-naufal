import { API_URL } from "./constants";

export const httpClient = async <T>(
  url: string,
  type: string,
  obj: any = undefined,
  isExternalURL: boolean = false
): Promise<IStandardAPIResponse<T>> => {
  try {
    type = type.toUpperCase();
    if (type.toLowerCase() === "get" && obj && isExternalURL === false) {
      const params = Object.keys(obj)
        .map(function (key) {
          return key + "=" + obj[key];
        })
        .join("&");
      url += "?" + params;
      obj = undefined;
    }
    // if (obj) {
    //   // obj = removeNulls({ ...obj });
    //   obj = removeNulls(obj);
    // }
    let apiUrl = "";
    if (isExternalURL === false) {
      apiUrl = API_URL + url;
    } else {
      apiUrl = url;
    }
    const methodType = type.toUpperCase();
    const res: any = await fetch(apiUrl, {
      method: methodType,
      body: methodType !== "GET" ? JSON.stringify(obj) : undefined,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + obj.accessToken || "",
      },
    });
    if (isExternalURL) {
      return res;
    }
    return await res.json();
  } catch (error) {
    console.group(`API ${type} Error`);
    console.error(error);
    console.groupEnd();
    throw error;
  }
};
