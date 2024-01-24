import data from "../data/age_appraisal.js";

const getRelativeEfficiency = (job, age) => {
  const arr = data[job];
  if (!arr) {
    throw new Error(`Job ${job} not found`);
  }
  const sum_greater = arr.reduce((acc, { age: a }) => {
    if (a >= age) {
      return acc + a;
    }
    return acc;
  }, 0);
  const count_greater = arr.reduce((acc, { age: a }) => {
    if (a >= age) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const sum_smaller = arr.reduce((acc, { age: a }) => {
    if (a < age) {
      return acc + a;
    }
    return acc;
  }, 0);
  const count_smaller = arr.reduce((acc, { age: a }) => {
    if (a < age) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const avg_greater = sum_greater / count_greater;
  const avg_smaller = sum_smaller / count_smaller;
  return (avg_greater - avg_smaller) / avg_smaller;
};

export default getRelativeEfficiency;
