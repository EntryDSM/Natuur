import react from 'react';

const AcceptDisableButton = () => (
  <div class="btn">
    <button
      type="button"
      class="input-btn input-btn--next input-btn input-btn--next--false"
    >
      <span
        class="input-btn__arrow input-btn__arrow--right
      input-btn__arrow--right--false"
      >
        〉
      </span>
      <span
        class="input-btn__text input-btn__text--next
      input-btn__text--false"
      >
        인증하기
      </span>
    </button>
  </div>
);

export default AcceptDisableButton;
