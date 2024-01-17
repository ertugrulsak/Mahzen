// List.js

import React, { useState } from "react";
import '../Css/list.css';

const List = ({ type }) => {
  const [newItem, setNewItem] = useState("");
  const [listItems, setListItems] = useState([]);

  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setListItems((prevList) => [...prevList, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    setListItems((prevList) => prevList.filter((_, i) => i !== index));
    // Yorumları da sil
    setComments((prevComments) => {
      const newComments = { ...prevComments };
      delete newComments[index];
      return newComments;
    });
  };

  const handleAddComment = (index) => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => ({
        ...prevComments,
        [index]: prevComments[index]
          ? [...prevComments[index], newComment]
          : [newComment],
      }));
      setNewComment("");
    }
  };

  const handleRemoveComment = (index, commentIndex) => {
    setComments((prevComments) => ({
      ...prevComments,
      [index]: prevComments[index].filter((_, i) => i !== commentIndex),
    }));
  };

  return (
    <div className="list-container">
      <h3>{type}</h3>
      <div>
      <h2>LİSTEM</h2>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Ekle</button>
      </div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Sil</button>

            {/* Yorumlar */}
            <div>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={() => handleAddComment(index)}>Yorum Ekle</button>
              <ul>
                {comments[index] &&
                  comments[index].map((comment, commentIndex) => (
                    <li key={commentIndex}>
                      {comment}
                      <button
                        onClick={() => handleRemoveComment(index, commentIndex)}
                      >
                        Yorumu Sil
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
