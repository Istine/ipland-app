export const getipDetails = async (ip = "") => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ip,
      apikey: import.meta.env.VITE_API_KEY,
    }),
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/ip`, options);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getGeolocation = async () => {
  try {
    const response = await fetch("https://api.ipregistry.co/?key=tryout");
    if (response.ok) {
      const data = await response.json();
      return { country: data.location.country.name };
    }

    return { country: "We are try to find you. 😉" };
  } catch (error) {
    console.log(error.message);
  }
};
