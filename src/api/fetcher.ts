export const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API-feil: ${res.status} - ${errorText}`);
    }
    return res.json();
  });
