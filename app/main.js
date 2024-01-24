import getRelatedJobs from "./data/relatedJobs.js";
import express from "express";
import sortJobs from "./helpers/sort.js";
const recommendedJob = (currJob, age) => {
  const relatedJobs = getRelatedJobs(currJob);
  console.log(relatedJobs);
  const sortedJobs = sortJobs(relatedJobs, age);
  console.log(sortedJobs);
  return sortedJobs;
};
const app = express();
app.use(express.json());
app.post("/recommend", (req, res) => {
  const { job, age } = req.body;
  const recommended = recommendedJob(job, age);
  res.send(recommended);
});
app.listen(process.env.PORT || 3000, () =>
  console.log("Listening on port 3000")
);
