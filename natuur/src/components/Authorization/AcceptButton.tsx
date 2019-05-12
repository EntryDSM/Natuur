import React from 'react';

const AcceptButton = () => (
  <div class="btn">
    <button type="button"
          class="input-btn input-btn--next"
          v-if="(isAccept && verify[0] && verify[1] && verify[2])"
          @click="moveToNextPage"
    >
      <span class="input-btn__arrow input-btn__arrow--right">〉</span>
      <span class="input-btn__text input-btn__text--next">인증하기</span>
    </button>
  </div>
);

export default AcceptButton;