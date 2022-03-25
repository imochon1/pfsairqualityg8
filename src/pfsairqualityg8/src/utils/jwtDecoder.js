export const decodedJWT = (jwtParams) => {
  // eslint-disable-next-line no-unused-vars
  const [_, payload, __] = jwtParams.split(".");
  const payloadFormatted = payload.replace("-", "+").replace("_", "/");

  const payloadData = JSON.parse(atob(payloadFormatted));

  return payloadData;
};
