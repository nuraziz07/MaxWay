import { createContext, useReducer } from 'react';

const initialValue = {
    userCard: [],
    term: '',
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'plus': {
            const existing = state.userCard.find(
                (item) => item.id === payload.id
            );

            if (existing) {
                return {
                    ...state,
                    userCard: state.userCard.map((item) =>
                        item.id === payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                ...state,
                userCard: [...state.userCard, { ...payload, quantity: 1 }],
            };
        }
        case 'minus': {
            const existing = state.userCard.find(
                (item) => item.id === payload.id
            );

            if (existing.quantity <= 1) {
                return {
                    ...state,
                    userCard: state.userCard.filter(
                        (item) => item.id !== payload.id
                    ),
                };
            }

            return {
                ...state,
                userCard: state.userCard.map((item) =>
                    item.id === payload.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item
                ),
            };
        }
        case 'decrement': {
            return {
                ...state,
                userCard: state.userCard.map((item) =>
                    item.id === payload.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item
                ),
            };
        }
        case 'reset': {
            return {
                ...state,
                userCard: [],
            };
        }
        case 'filter': {
            return { ...state, term: payload };
        }
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
export default Provider;
