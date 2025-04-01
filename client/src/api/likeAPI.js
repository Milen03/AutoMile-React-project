
import { useEffect, useState } from "react";
import request from "../utils/request.js";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/likes`;

export const useLike = (carId, userId, accessToken) => {
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);

    const fetchLikes = () => {
        request.get(`${baseUrl}?where=carId%3D%22${carId}%22`)
            .then((data) => {
                setLikes(data);
                setLiked(data.some((like) => like._ownerId === userId));
            })
            .catch(console.error);
    };

    useEffect(fetchLikes, [carId, userId]);

    const addLike = async () => {
        if (!liked) {
            try {
                const newLike = await request.post(baseUrl, { carId }, {
                    headers: { "Content-Type": "application/json", 
                      "X-Authorization": accessToken }
                });
                setLikes([...likes, newLike]);
                setLiked(true);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return { 
      likesCount: likes.length, 
      liked, 
      addLike 
    };
};
