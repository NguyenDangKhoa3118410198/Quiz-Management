export const fetchCities = async () => {
  const data = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm').then(
    (res) => res.json()
  );
  return data.data;
};

export const fetchDistricts = async (cityId: string) => {
  const data = await fetch(
    ` https://esgoo.net/api-tinhthanh/2/${cityId}.htm`
  ).then((res) => res.json());
  return data.data;
};

export const fetchWards = async (districtId: string) => {
  const data = await fetch(
    `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`
  ).then((res) => res.json());
  return data.data;
};
