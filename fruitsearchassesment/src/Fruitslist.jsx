import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './store/Action';

const FruitList = ({ fruits, filter, setFilter }) => {
  const filteredFruits = fruits.filter(fruit => fruit.includes(filter));

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  fruits: state.fruits,
  filter: state.filter
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitList);