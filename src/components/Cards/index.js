import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { setActiveParticipant, filterParticipants } from "../../state/actions";

const CardWrap = styled.div`
  overflow-x: hidden; /* left and right only */
  flex: 1 0 50vw;
  height: calc(100vh - 80px);
`;
const CardContainer = styled.div`
  flex: 1 0 50vw;
  background: #ca9b68;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0rem;
  padding: 0.5rem 0.5rem;
  overflow-x: hidden;
`;
const Card = styled.div`
  width: calc(50% - 1rem);
  height: 150px;
  border-radius: 4px;
  background: #d8b48d;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #bc8243;
  position: relative;
  flex-wrap: wrap;
  align-content: center;

  &.active {
    background: #ca9b68;
  }
`;

const Name = styled.div`
  color: #bc8243;
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
`;

const Category = styled.div`
  color: #bc8243;
  font-size: 16px;
  font-weight: normal;
  flex: 1 0 100%;
  margin-top: 12px;
  text-transform: uppercase;
`;

const Number = styled.div`
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  z-index: 5;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #bc8243;
  color: #d8b48d;
  font-size: 16px;
`;

const ParticipantCards = (props) => {
  const { participants, categories, active_category } = props;

  const activeParticipans = active_category.id
    ? participants.filter((p) => p.categoryId === active_category.id)
    : participants;
  return (
    <CardWrap>
      <CardContainer>
        {activeParticipans.map((p) => {
          const category = categories.find((c) => c.id === p.categoryId).name;
          return (
            <Card>
              <Number>{p.id}</Number>
              <Name>{p.name}</Name>
              <Category>{category}</Category>
            </Card>
          );
        })}
      </CardContainer>
    </CardWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    participants: state.all.participants,
    categories: state.all.categories,
    active_category: state.all.active_category
  };
};

const mapDispatchToProps = {
  setActiveParticipant,
  filterParticipants
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantCards);
