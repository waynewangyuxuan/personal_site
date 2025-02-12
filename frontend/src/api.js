// Fetch JSON directly from the public folder
export const fetchData = async () => {
    try {
      const response = await fetch("/seeder.json");
      if (!response.ok) throw new Error("Failed to load JSON");
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };