import { createBrowserHistory } from "history";
import { appBaseURL } from "./routes/appRoutes";

export default createBrowserHistory({
  basename: appBaseURL,
  forceRefresh: false
});
