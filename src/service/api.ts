import axios from "axios";
const apiKey = "35797947-9fd3c22e513f686111f6e4336";

const fetchImageWithKeyword = async (keyword: string, page: number) => {
  const data = await axios
    .get(`https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`)
    .then(response => {
      return response.data;
    });
  return data;
};

export default fetchImageWithKeyword;
