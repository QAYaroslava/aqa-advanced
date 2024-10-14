const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://api.restful-api.dev",
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Request: [${config.method.toUpperCase()}] ${config.url}`);
    if (config.data) {
      console.log("Request Data:", config.data);
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log(`Response: [${response.status}] ${response.config.url}`);
    console.log("Response Data:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        `Response Error: [${error.response.status}] ${error.config.url}`
      );
      console.error("Error Response Data:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

test("GET /objects should return list of all objects", async () => {
  const response = await apiClient.get(`/objects`);

  expect(response.status).toBe(200);
});

test("GET /objects/7 should return object with id 7", async () => {
  const response = await apiClient.get(`/objects/7`);

  expect(response.status).toBe(200);
});

test('GET /objects/99999 should return "not found" error', async () => {
  try {
    const response = await apiClient.get(`/objects/99999`);
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

test("POST /objects should add new object", async () => {
  const newObject = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };
  const response = await apiClient.post(`/objects`, newObject);

  expect(response.status).toBe(200);
});

test("POST /objects adding object with invaid data", async () => {
  const invalidPost = {};

  try {
    await apiClient.post(`/posts`, invalidPost);
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});
