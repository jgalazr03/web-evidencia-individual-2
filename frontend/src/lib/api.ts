import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL!;
console.log("API base:", API);

export const fetchPolls = () => axios.get(API).then(res => res.data);
export const createPoll = (question: string, options: string[]) =>
  axios.post(API, { question, options }).then(res => res.data);
export const getPoll = (id: string) =>
  axios.get(`${API}/${id}`).then(res => res.data);
export const voteOption = (optionId: string) =>
  axios.post(`${API}/vote/${optionId}`).then(res => res.data);
