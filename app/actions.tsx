"use server";

export const addProduct = async (data: FormData) => {
  const newProduct = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: null,
  };
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  const payload = await response.json();
  return payload;
};
