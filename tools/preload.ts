import { fetchData } from "./fetchData";

export const preload = (urls: string[]) => {
  urls.forEach((url) => void fetchData(url).then())
};
