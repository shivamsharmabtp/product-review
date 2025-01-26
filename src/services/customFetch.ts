import sampleData from "../assets/sampleData.json";

type CustomFetchOptions = {
  url: string;
  method: string;
  headers: { [key: string]: string };
  body: any;
};

const customFetch = async (options: CustomFetchOptions) => {
  console.log(`Mocking fetch of ${options.url}`);
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    ok: true,
    json: async () => {
      return sampleData[0];
    },
  };
};

export default customFetch;
