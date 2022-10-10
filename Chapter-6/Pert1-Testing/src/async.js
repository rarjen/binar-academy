export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
