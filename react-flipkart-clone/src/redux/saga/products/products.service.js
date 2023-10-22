export const getCategoriesService = async () => {
  let url = `http://localhost:3004/categories`;
  let response = await fetch(url, { method: "GET" });
  return response.json();
};

export const getProductListService = async (object) => {
  console.log(object);
  let url = `http://localhost:3004/list?category_id=${object.c_id}`;
  let response = await fetch(url, { method: "GET" });
  return response.json();
};
