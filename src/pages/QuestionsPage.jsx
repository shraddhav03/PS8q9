import { ForumContext } from "..";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const QuestionsPage = () => {
  const { itemId } = useParams();
  const { data } = useContext(ForumContext);
  const [answer, setAnswer] = useState([]);
  const [clicked, setClicked] = useState(false);

  // const getAnswer = (itemId) => {
  //   const item = data.filter(({ id }) => id === itemId);
  //   setAnswer(item);
  //   setClicked(true);
  // };

  return (
    <>
      {data.map(({ id, question, answer }) => {
        return (
          <div key={id} style={{ textAlign: "left" }}>
            <p>{question}</p>
            <p>
              <Link>upvote</Link>
            </p>
            <p>
              <Link>downvote</Link>
            </p>
            {/* <button onClick={(id) => getAnswer(id)}>answer</button> */}
            <Link to={`/answer/${id}`}>answer</Link>
          </div>
        );
      })}
    </>
  );
};
