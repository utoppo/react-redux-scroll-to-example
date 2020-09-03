import React from "react";
import { connect } from "react-redux";
import { FilterWrap, FilterItem } from "./styled";
import { filterParticipants } from "../../state/actions";

const Filter = (props) => {
  const { filterParticipants, categories } = props;

  const triggerAction = (cat) => {
    filterParticipants(cat.id, cat.name);
  };
  return (
    <FilterWrap>
      {categories.map((c) => {
        return (
          <FilterItem
            key={`filter_item_${c.id}`}
            onClick={() => triggerAction(c)}
          >
            {c.name}
          </FilterItem>
        );
      })}
    </FilterWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.all.categories
  };
};

const mapDispatchToProps = {
  filterParticipants
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
