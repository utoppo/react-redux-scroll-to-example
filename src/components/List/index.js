import React from "react";
import { connect } from "react-redux";
import { setActiveParticipant } from "../../state/actions";
import { ListWrap, ListContainer, ListItem, Name, Number } from "./styled";

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
