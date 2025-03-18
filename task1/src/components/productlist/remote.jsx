export const fetchProductsFromAPI = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return await response.json();
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  };
  