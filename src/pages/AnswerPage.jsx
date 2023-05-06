import { ForumContext } from "..";
import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const AnswerPage = () => {
  const { data } = useContext(ForumContext);
  const { itemId } = useParams();

  const item = data.filter((ansData) => ansData.id === Number(itemId));

  return (
    <>
      {item.map(({ id, question, answer }) => {
        return (
          <div style={{ textAlign: "left" }}>
            <h4>
              Question {id}:{question}
            </h4>
            <p>Answer:{answer}</p>
            <Link to={`/`}>home</Link>
          </div>
        );
      })}
    </>
  );
};
