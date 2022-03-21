import { DateTime } from "luxon";

const validateTime = (time) => {
  const marketStart = DateTime.fromISO("09:00");
  const marketEnd = DateTime.fromISO("17:00");
  const dt = DateTime.fromISO(time);
  if (dt < marketStart) {
    return { valid: false, msg: "Time must be after markets start." };
  } else if (dt > marketEnd) {
    return { valid: false, msg: "Time must be before markets close." };
  }
  return { valid: true, msg: "Valid time" };
};

export default validateTime;
