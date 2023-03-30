import React from "react";
import Layout from "../components/layout";
import { Row, Col, Image } from "react-bootstrap";
import { randomAvatar } from "../utils";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { getUser } from "../hooks/user.action";
import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/post";

function Home() {
  const posts = useSWR("/post/", fetcher, {
    refreshInterval: 10000,
  });
  const user = getUser();
  if (!user) {
    return <div>Loading!</div>;
  }
  return (
    <Layout>
      <Row className="justify-content-evenly">
        <Col sm={7}>
          <Row
            className="border rounded
           align-items-center">
            <Col className="flex-shrink-1">
              <Image
                src={randomAvatar()}
                roundedCircle
                width={52}
                height={52}
                className="my-2"
              />
            </Col>
            <Col sm={10} className="flex-grow-1">
              <CreatePost />
            </Col>
          </Row>
          <Row className="my-4">
            {posts.data?.results.map((post, index) => (
              <Post key={index} post={post} refresh={posts.mutate} />
            ))}
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}
export default Home;
