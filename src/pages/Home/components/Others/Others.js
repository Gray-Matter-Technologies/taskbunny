import React from "react";
import styled from "styled-components";
import Tasks from "./components/Tasks";
import Tabs from "./components/Tabs";
import TabDescription from "./components/TabDescription";

const Button = styled.button`
  display: block;
  cursor: pointer;
  letter-spacing: 0.15px;
  border-radius: 90px;
  padding: 14px 26px;
  margin: 20px auto;
  width: 240px;
  font-size: 18px;
  background: #f3d250;
  border: 3px solid #000000;
`;

const SectionTitle = styled.h3`
  color: rgb(41, 43, 50);
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin: 0px;
  padding: 80px 100px 0;
  @media (max-width: 768px) {
    padding: 2rem 4rem 0;
  }
`;

const Wrapper = styled.section`
  background-color: #f6f8fd;
  padding: 24px 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.25px;
`;

class Others extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "FIXING_STUFF",
    };
  }

  render() {
    const { activeTab } = this.state;
    return (
      <Wrapper>
        <SectionTitle>See what others are getting done</SectionTitle>
        <Tabs
          activeTab={activeTab}
          handleTabClick={(b) => {
            this.setState({
              activeTab,
            });
          }}
        />
        <TabDescription />
        <Tasks />
        <Button>Get Started Now</Button>
      </Wrapper>
    );
  }
}

export default Others;
