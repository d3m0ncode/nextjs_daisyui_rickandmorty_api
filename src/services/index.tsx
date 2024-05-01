const API_RICK_AND_MORTY = process.env.NEXT_PUBLIC_API_RICK_AND_MORTY;

const endPoints = {
  search: (name: string) => `${API_RICK_AND_MORTY}/character/?name=${name}`,
};
export default endPoints;
