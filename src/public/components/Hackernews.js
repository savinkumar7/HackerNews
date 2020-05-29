import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTable";
import "./index.css";

const Hackernews = (props) => {
  const { story } = props;
  const {
    objectID,
    author,
    title,
    url,
    created_at: createdAt,
    points: likes,
    num_comments: totalComments,
    points,
  } = story;
  let [totalLikes, setLikes] = useState(likes);
  totalLikes = sessionStorage.getItem(objectID)
    ? JSON.parse(sessionStorage.getItem(objectID)).likes
    : likes;
  const domainName = url && new URL(url).hostname;
  const date = new Date(createdAt).toDateString();

  const upvote = (objectID, points) => {
    sessionStorage.setItem(
      objectID,
      JSON.stringify({
        likes: points + 1,
      })
    );
    setLikes(points + 1);
  };

  return (
    <Tr className="story-row">
      <Td>{totalComments}</Td>
      <Td>{totalLikes}</Td>
      <Td>
        <span
          className="upvote-button"
          onClick={() => upvote(objectID, totalLikes)}
        >
          <i className="fas fa-caret-up"></i>
        </span>
      </Td>
      <Td>
        <div className="sm-2">
          <span className="story-title">{title}</span>
          <span className="domain-name">({domainName})</span>
          <span className="author-name"> by {author}</span>
          <span className="date">{date}</span>

          <div className="hide-container">
            <br />
            <span className="hide-story" onClick={props.hideStory}>
              [ Hide ]
            </span>
          </div>
        </div>
      </Td>
    </Tr>
  );
};

export default Hackernews;
