import PropTypes from 'prop-types';

const Title = ({ name, type }) => {

    return (
        <h2 style = {{ fontWeight: type }}>
            Hello, {name}!
        </h2>
    );
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        "bold",
        "normal"
    ])
}

Title.defaultProps = {
    type: "normal"
};

export default Title;