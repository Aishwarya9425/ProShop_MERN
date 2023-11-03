//instead of third party package
//own async handler
//if promise is resolved, it will call next middleware
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
