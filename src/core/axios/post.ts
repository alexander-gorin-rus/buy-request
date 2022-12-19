import axios, { AxiosRequestConfig, ResponseType } from 'axios';
import config from '../../config';

interface IPostOptions {
  path: string;
  data: { [key:string]: any };
}

interface IAxiosResponse {
  [key:string]: any
}

export default async function post(options:IPostOptions, contentType: string = 'multipart/form-data', responseType: ResponseType = 'json', params?: any): Promise<any> {
  const { path, data = {} } = options;
  const axiosOptions: AxiosRequestConfig = {
    headers: {
      'Content-Type': contentType,
    },
    responseType,
    withCredentials: true,
    params,
  };
  const res: IAxiosResponse = await axios.post<IAxiosResponse>(`${config.restApiHost + path}`, data, axiosOptions);
  if (res.data.error) {
    throw res.data.error;
  }
  return res.data;
}
