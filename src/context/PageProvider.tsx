import React, { createContext, useReducer, useContext, Dispatch, PropsWithChildren } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


type State = {
    page: number;
};

type Action =
    | { type: 'NEXT' }
    | { type: 'BACK' }
    | { type: 'RESET' }

type StoreContextType = {
    state: State;
    dispatch: Dispatch<Action>;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'NEXT':
            return { ...state, page: state.page + 1 };
        case 'BACK':
            return { ...state, page: state.page - 1 };
        case 'RESET':
            return { ...state, page: state.page = 0 };
        default:
            return state;
    }
};

const PAGE_KEY = 'page';

export const PageProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [storedPage, setStoredPage] = useLocalStorage<number>(PAGE_KEY, 0);
    const [state, dispatch] = useReducer(reducer, {
        page: storedPage,
    });

    const dispatchWithLocalStorage = (action: Action) => {
        const newState = reducer(state, action);
        setStoredPage(newState.page);
        dispatch(action);
    };

    return (
        <StoreContext.Provider value={{ state, dispatch: dispatchWithLocalStorage }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = (): StoreContextType => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('Soy error wiu wiu wiu');
    }
    return context;
};
