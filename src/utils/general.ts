export const convertError = (err: any) => {
  let message = "";
  let error;

  if (err.message) {
    message = err.message;
    error = err;
  } else if (err.errors && err.errors.length) {
    message = err.errors[0].msg;
    error = err.errors[0];
  }

  return {
    message,
    error,
  };
};
