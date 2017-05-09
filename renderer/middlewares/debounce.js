const pending = new Map();

const debounceMiddleware = () => next => action => {
  const { debounce } = action.meta || {};

  if (!debounce)
    return next(action);

  if (pending.get(action.type))
    clearTimeout(pending.get(action.type));

  const handleAfterDebounce = () => {
    pending.delete(action.type);
    next(action);
  };

  pending.set(
    action.type,
    setTimeout(handleAfterDebounce, debounce)
  );
};

export default debounceMiddleware;