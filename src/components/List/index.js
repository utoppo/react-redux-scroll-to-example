import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { setActiveParticipant } from "../../state/actions";

const ListWrap = styled.div`
  overflow-x: hidden; /* left and right only */
  flex: 1 0 50vw;
  height: calc(100vh - 80px);
  padding: 0;
`;
const ListContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  flex: 1 0 50vw;
  background: #ca9b68;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0rem;
  padding: 0.5rem 3rem;
  overflow-x: hidden;
`;
const ListItem = styled.li`
  width: calc(100% - 1rem);
  height: 40px;
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
  &:hover {
    background: blue;
  }
`;

const Name = styled.div`
  color: #bc8243;
  font-size: 16px;
  font-weight: bold;
`;

const Number = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  transform: translateX(-50%);
  z-index: 5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #bc8243;
  color: #d8b48d;
  font-size: 16px;
`;

const handleClick = (participant) => (e) => {
  setActiveParticipant(participant.id);
  participant.ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const ParticipantCards = (props) => {
  const { participants, active_category } = props;
  const activeParticipans = active_category.id
    ? participants.filter((p) => p.categoryId === active_category.id)
    : participants;
  return (
    <ListWrap>
      <ListContainer>
        {activeParticipans.map((p) => {
          return (
            <ListItem onClick={handleClick(p)}>
              <Number>{p.id}</Number>
              <Name>{p.name}</Name>
            </ListItem>
          );
        })}
      </ListContainer>
    </ListWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    participants: state.all.participants,
    active_category: state.all.active_category
  };
};

const mapDispatchToProps = {
  setActiveParticipant
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantCards);
