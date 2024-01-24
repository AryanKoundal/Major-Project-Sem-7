import getRelativeEfficiency from "./relativeEfficiency.js";
function sortJobs(jobs, age) {
  const arr = jobs.map(job => ({
    job,
    efficiency: getRelativeEfficiency(job, age),
  }));
  arr.sort((a, b) => b.efficiency - a.efficiency);
  return arr.map(({ job }) => job);
}

export default sortJobs;
