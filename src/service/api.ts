import axios from "axios";
const apiKey = "35797947-9fd3c22e513f686111f6e4336";

const fetchImageWithKeyword = async (keyword: string, page: number) => {
  try {
    const resposn = await axios.get(
      `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`
    );
    const data = resposn.data;
    return data;
  } catch (error) {
    throw new Error("Network problems.");
  }
};

export default fetchImageWithKeyword;
