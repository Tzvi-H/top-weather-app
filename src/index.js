import "./style.css";

import { submitButton } from "./dom_elements";
import { handleSubmit } from "./dom_actions";

submitButton.addEventListener("click", handleSubmit);
