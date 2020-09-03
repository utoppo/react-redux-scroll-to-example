import React from "react";
import { connect } from "react-redux";
import { setActiveParticipant, filterParticipants } from "../../state/actions";
import {
  CardWrap,
  CardContainer,
  Card,
  Category,
  Name,
  Number
} from "./styled";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
            <Card key={`card_item_${p.id}`} ref={p.ref}>
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
