import NewComment from "./NewComment";



export default function NewCommentArea({ id, setCommentsCount }) {
  return (
    <>
      <NewComment 
        id={id} 
        setCommentsCount={setCommentsCount}
      />
    </>
  );
}



