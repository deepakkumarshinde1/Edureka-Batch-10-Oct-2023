export const getCategoriesService = async () => {
  console.log("service");
  let url = `http://localhost:30044/categories`;
  let response = await fetch(url, { method: "GET" });
  return response.json();
};
