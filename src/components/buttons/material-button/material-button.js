import React from "react";
import "./material-button.css";

const MaterialButton = () => {
  return (
    <div>
      <button class="btn-mat transparent-white medium">Transparent</button>
      <button class="btn-mat dark-outline medium">Dark</button>
      <button class="btn-mat success-outline medium">Success</button>
      <button class="btn-mat info-outline medium">Info</button>
      <button class="btn-mat warning-outline medium">Warning</button>
      <button class="btn-mat danger-outline medium">Danger</button>
      <button class="btn-mat default-outline medium">Default</button>

      <button class="btn-mat dark-fill large up">Dark</button>
      <button class="btn-mat success-fill large">Success</button>
      <button class="btn-mat info-fill large">Info</button>
      <button class="btn-mat warning-fill large">Warning</button>
      <button class="btn-mat danger-fill large">Danger</button>
      <button class="btn-mat default-fill large">Default</button>
    </div>
  );
};

export default MaterialButton;
