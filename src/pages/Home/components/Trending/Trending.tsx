import { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import { getTrendingGifs } from "../../../../services/getTrendingGifs";

export function Trending() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingGifs().then((data) => {
      if (data) {
        setGifs(data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <p className="text-2xl text-white mb-3">Trending</p>
        <p className="flex items-center text-gray-500">
          <span className="mr-1">All the GIFs</span>
          <IoIosArrowForward />
        </p>
      </div>
      <section className="flex gap-2 h-36">
        {!loading &&
          gifs.length &&
          gifs.map((gif: any) => (
            <div key={gif.id} className="w-full h-full">
              <img
                className="rounded w-full h-full object-cover"
                src={gif?.images?.downsized_medium?.url}
                alt={gif.title}
              />
            </div>
          ))}
      </section>
    </div>
  );
}

export default Trending;
