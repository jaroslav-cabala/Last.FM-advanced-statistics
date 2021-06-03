// module.exports = async () => {
//   return {
//     verbose: true,
//     restoreMocks: true,
//   };
// };
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  restoreMocks: true,
};
export default config;