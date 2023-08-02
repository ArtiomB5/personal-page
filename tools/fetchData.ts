export const fetchData = async (url: string) =>  {
    try {
        const res = await fetch(url, { next: { revalidate: 0 } });

        return res.json();
    } catch (error) {
        return JSON.stringify(error);
    }
  }