import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  // {isLoading ? <h3>cargando...</h3> : null}
  return (
    <>
      <h3 className="tittle-Category">{category}</h3>

      {isLoading && <h3>cargando...</h3>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
