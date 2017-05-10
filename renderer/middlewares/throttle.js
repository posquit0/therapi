const pending = new Map();

const throttleMiddleware = () => next => action => {
  const { throttle } = action.meta || {};

  if (!throttle)
    return next(action);

  if (pending.get(action.type))
    return;

  const clearThrottle = () => pending.delete(action.type);

  pending.set(action.type, setTimeout(clearThrottle, throttle));
  next(action);
};

export default throttleMiddleware;
