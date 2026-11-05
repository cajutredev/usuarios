import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

api.interceptors.request.use((config) => {
  const csrfCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("XSRF-TOKEN="));

  const csrfToken = csrfCookie?.substring("XSRF-TOKEN=".length);

  const methodsWithCsrf = ["post", "put", "patch", "delete"];

  if (
    csrfToken &&
    methodsWithCsrf.includes(config.method?.toLowerCase() ?? "")
  ) {
    config.headers.set(
      "X-XSRF-TOKEN",
      decodeURIComponent(csrfToken)
    );
  }

  return config;
});

export default api