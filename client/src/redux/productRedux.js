/* selectors */
export const getAllProducts = (state) => state.products;
export const getBrandNewProducts = (state) => state.products.filter(product => product.brandNew === true);
export const getCount = ({ cart }) => cart.products.length;
export const getAllRifles = (state) => state.products.filter(product => product.type === 'Rifle');
export const getAllGuns = (state) => state.products.filter(product => product.type === 'Gun');
export const getItemById = (state, id) => state.products.find(product => product.id == id);

/* action name creator */
const reducerName = 'product';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });

/* reducer */
function productReducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}

export default productReducer;