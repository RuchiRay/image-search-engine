import React, { useEffect, useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { addImage, empty, resetPage } from "../action/action";
const key = process.env.REACT_APP_API_KEY;
export const Collection = () => {
  const [dataFetched, setDataFetched] = useState(true);

  const dispatch = useDispatch();
  const term = useSelector((state) => state.term);
  const pages = useSelector((state) => state.pages);

  const images = useSelector((state) => state.images);
  const box = images.imageBox;
  console.log("printing box", box);
  const url = `https://api.unsplash.com/search/photos?page=${pages}&per_page=20&query=${term.searchTerm}&client_id=${key}`;
  

  useEffect(() => {
    dispatch(empty());
    dispatch(resetPage());
  }, [term, dispatch]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      if (results.length === 0) setDataFetched(false);
      else setDataFetched(true);
      const collection = results.map((item) => {
        const { id, urls, user, likes } = item;
        const image = {
          id: id,
          imgUrl: urls.regular,
          like: likes,
          creator: user.name,
          creatorLink: user.links.html,
        };
  
        return image;
      });
      dispatch(addImage(collection));
    };
    getImages()
  }, [pages,dispatch,url]);

  if (dataFetched === false) return <p>No image found for your search term</p>;
  if (box.length <= 0) return <p>loading</p>;

  return (
    <div className="collection">
      <div className="masonry-layout">
        {box.map((item) => {
          const { id, imgUrl, like, creator, creatorLink } = item;

          return (
            <div className="image" key={id}>
              <img src={imgUrl} alt="" />
              <div className="image-info">
                <p>
                  Photo by{" "}
                  <a href={creatorLink} target="_blank" rel="noreferrer">
                    {creator}
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com/?utm_source=Image Search Engine&utm_medium=referral"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unsplash
                  </a>
                </p>

                <p>
                  <TiHeartFullOutline />
                  {like}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
