import axios, { AxiosRequestConfig, ResponseType } from 'axios';
import config from '../../config';

interface IDeleteOptions {
  path: string;
  params: { [key:string]: string };
  responseType?: ResponseType;
}

interface IAxiosResponse {
  [key:string]: any
}

export default async function del<T>(options:IDeleteOptions): Promise<T> {
  const { path, params = {}, responseType = 'json' } = options;
  const axiosOptions: AxiosRequestConfig = {
    withCredentials: true,
    params,
    responseType,
  };
  const res: IAxiosResponse = await axios.delete<IAxiosResponse>(`${config.restApiHost + path}`, axiosOptions);
  if (res.data.error) {
    throw res.data.error;
  }
  return res.data;
}
