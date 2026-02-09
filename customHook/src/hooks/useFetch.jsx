// $ Here We Are Creating The Action

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

//& Here We Have The Initial Value

const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
};

//# Here We Are Creating The Reducer

const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };

    case FETCH_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        data: [...oldState.data, payload],
      };

    case FETCH_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};
