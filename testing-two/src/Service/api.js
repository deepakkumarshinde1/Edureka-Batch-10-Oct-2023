export async function getData() {
  let url = "https://fakestoreapi.com/products";
  let response = await fetch(url, { method: "GET" });
  return response.json();
}
