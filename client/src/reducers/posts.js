export default (posts = [], action) => {
  if (action.type === "FETCH-ALL") return posts;
  else if (action.type === "CREATE") return posts;
  else return posts;
};
