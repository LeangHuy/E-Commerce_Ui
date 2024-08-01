export const fetchLocationByLatLon = async (lat, lon) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?addressdetails=1&lat=${lat}&lon=${lon}&format=jsonv2&limit=1&countrycodes=kh&accept-language=en`
  );
  const data = await response.json();
  return data;
};

export const fetchLocationBySearching = async (place_name) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${place_name}&countrycodes=kh&accept-language=en&category=city&addressdetails=1`
  );
  const data = await response.json();
  return data;
};
