import react from 'react';

import AcceptButton from './AcceptButton';

const InformationInputBox = () => (
  <div class="InfoInput" v-else={true}>
    <div>
      <div class="InfoInput__wapper">
        <div class="InfoInput__wapper__title">이메일</div>
        <div class="InfoInput__wapper__inputBox">
          <input
            type="text"
            class="InfoInput__wapper__inputBox__input"
            placeholder="example@dsmhs.kr"
            v-model="email"
          />
        </div>
        <div class="InfoInput__wapper__inputBox__check" v-if="verify[0]">
          ✓
        </div>
      </div>
      <div class="InfoInput__wapper">
        <div class="InfoInput__wapper__title">비밀번호</div>
        <div class="InfoInput__wapper__inputBox">
          <input
            type="password"
            class="InfoInput__wapper__inputBox__input"
            placeholder="••••••••"
            v-model="pw"
          />
          <div class="InfoInput__wapper__inputBox__check" v-if="verify[1]">
            ✓
          </div>
        </div>
        <span class="InfoInput__wapper__inputBox__warning">
          * 영문, 숫자 포함 8자리 이상 16자리 이하
        </span>
      </div>
      <div class="InfoInput__wapper pwcheck">
        <div class="InfoInput__wapper__title">비밀번호 확인</div>
        <div class="InfoInput__wapper__inputBox">
          <input
            type="password"
            class="InfoInput__wapper__inputBox__input"
            placeholder="••••••••"
            v-model="pwcheck"
          />
          <div class="InfoInput__wapper__inputBox__check " v-if="verify[2]">
            ✓
          </div>
          <div
            class="InfoInput__wapper__inputBox--wrong"
            v-if="(pw !== pwcheck)"
          >
            비밀번호를 정확히 입력해주세요
          </div>
        </div>
      </div>
    </div>
    <AcceptButton />
  </div>
);

export default InformationInputBox;
