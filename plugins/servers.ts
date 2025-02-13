export default defineNuxtPlugin((nuxtApp: any) => {
  const runtimeConfig = useRuntimeConfig();

  const baseURL = runtimeConfig.public.baseURL;

  return {
    provide: {
      baseURL,
    },
  };
});
