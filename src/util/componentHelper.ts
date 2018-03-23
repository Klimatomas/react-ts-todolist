export const mergeProps = (
    stateProps: any | void,
    dispatchProps: any | void,
    ownProps: any | void
  ) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
  };
  