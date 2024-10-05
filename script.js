import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for breakpoint in this section
  executor: "ramping-arrival-rate", //Assure load increase if the system slows
  stages: [
    { duration: "1m", target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
};

export default () => {
  http.get("https://test-api.k6.io");
};
