import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div className="screen">
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

Screen.propTypes = {
  next: PropTypes.string,
  total: PropTypes.number,
  operation: PropTypes.number,
};

Screen.defaultProps = {
  next: null,
  total: 0,
  operation: null,
};

export default Screen;
