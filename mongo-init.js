db.createUser({
  user: "arthur",
  pwd: "ArthurDev",
  roles: [
    {
      role: "readWrite",
      db: "mern"
    }
  ]
});
