export default (posts = [], action) => {
  if (action.type === "FETCH-ALL") return action.payload;
  else if (action.type === "CREATE") return [...posts, action.payload];
  else if(action.type==="UPDATE") return posts.map((post)=> post._id===action.payload._id?action.payload:post);
  else return posts;
};
