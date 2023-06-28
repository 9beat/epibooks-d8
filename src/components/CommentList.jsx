import { Row, Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

export default function CommentList({ data, setCommentsCount }) {
    return (
        <Container>
        <Row className="pb-3">
            {data.map((item, i) => (
                <SingleComment 
                    item={item} 
                    key={i} 
                    setCommentsCount={setCommentsCount} 
                />
            ))}
        </Row>
        </Container>
    );
}

