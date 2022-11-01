import { useEffect, useState } from "react";
import { gatGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const data = await gatGifs(category);
    setImages(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { images, isLoading };
};
