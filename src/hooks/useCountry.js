import { useEffect, useState } from "react";

function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) {
      setCountry(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch country data.");
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data?.[0] ?? null);
      })
      .catch((err) => {
        setError(err.message);
        setCountry(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  return { country, loading, error };
}

export default useCountry;
