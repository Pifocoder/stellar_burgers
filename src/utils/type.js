import PropTypes from "prop-types";
const ingredientType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
});
export default ingredientType;
