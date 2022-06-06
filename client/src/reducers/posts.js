export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH-ALL":
      return posts;
      break;
    case "CREATE":
      return posts;
      break;

    default:
      return posts;
      break;
  }
};
