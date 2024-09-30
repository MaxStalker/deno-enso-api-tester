import { Configuration } from "../gen/api/index.ts";

const accessToken = Deno.env.get("ENSO_API_KEY");
const basePath = "https://api.enso.finance";

const headers = {
  Authorization: `Bearer ${Deno.env.get("ENSO_API_KEY")}`,
};

const Config = new Configuration({
  basePath,
  accessToken,
});

interface Constructable<Type> {
  new (...args: any): Type;
}

export const apiClient = <T>(API: Constructable<T>): T => {
  return new API(Config);
};
