import React, { useState, useEffect } from "react";
import { PageHeader, Image, Spin, Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const Content = styled.div`
  padding-left: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pod = () => {
  const [pod, setPod] = useState({});
  const getPictureOfTheDay = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=VZu8mcSxJnEdU4tJaT3icjFCCmsrn0nwdplCvWOX"
      );
      const data = await response.json();
      setPod(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPictureOfTheDay();
  }, []);

  return (
    <div>
      <PageHeader
        title="Beautiful relaxing image"
        subTitle="Pretty enough to forget the looming danger of the previous page"
      />
      <Content>
        {!pod.url ? (
          <Spin />
        ) : (
          <Container>
            <Image width={450} src={pod.url} alt="nasa picture of the day" />

            <Card style={{ width: 800 }}>
              <Meta title={pod.title} description={pod.explanation} />
            </Card>
          </Container>
        )}
      </Content>
    </div>
  );
};

export default Pod;
