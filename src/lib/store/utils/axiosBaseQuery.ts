import qs from "qs";
import axios, { Method } from "axios";

export interface IOptions {
  url?: string;
  method?: Method;
  data?: any;
  params?: any;
}

export const axiosBaseQuery =
  ({
    baseUrl,
    getToken,
    onError,
  }: {
    baseUrl: string;
    getToken?: any;
    onError?: (error: Error) => any;
  }) =>
  async (opts: IOptions | null, { getState }: any) => {
    const token = getToken?.(getState);
    try {
      const result = await axios({
        url: baseUrl + opts?.url,
        method: opts?.method,
        data: opts?.data,
        paramsSerializer: qs.stringify,
        params: opts?.params,
        headers: token && { Authorization: `Bearer ${token}` },
      });
      return { data: result.data };
    } catch (axiosError: any) {
      onError?.(axiosError);
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
