import {  useEffect, useState } from "react"
import request from "../utils/request.js"

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/like`



export const useLike = (carId, userId, accessToken) => {
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);
  
    // Зареждаме харесванията за конкретния автомобил
    useEffect(() => {
      request
        .get(`${baseUrl}?where=carId%3D%22${carId}%22`)
        .then((data) => {
          setLikes(data);
          const userLike = data.find((like) => like._ownerId === userId);
          if (userLike) {
            setLiked(true);
          }
        })
        .catch((error) =>
          console.error('Грешка при зареждането на харесвания:', error)
        );
    }, [carId, userId]);
  
    // New like post
    const addLike = () => {
      if (!liked) {
        request
          .post(
            baseUrl,
            { carId },
            {
              headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
              }
            }
          )
          .then((newLike) => {
            setLikes((prev) => [...prev, newLike]);
            setLiked(true);
          })
          .catch((error) =>
            console.error('Грешка при изпращането на like:', error)
          );
      }
    };
  
    return {
      likesCount: likes.length,
      liked,
      addLike
    };
  };
  
  