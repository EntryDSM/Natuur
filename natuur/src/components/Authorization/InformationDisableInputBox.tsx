import react from 'react';

import AcceptDisableButton from './AcceptDisableButton';

const InformationDisableInputBox = () => (
  <div class="InfoInput --false">
    <div>
      <div class="InfoInput__wapper --false">
        <div class="InfoInput__wapper__title --false">이메일</div>
        <div class="InfoInput__wapper__inputBox --false">
          <input
            type="text"
            class="InfoInput__wapper__inputBox__input --false"
            placeholder="example@dsmhs.kr"
            v-model="email"
            readonly={true}
          />
        </div>
      </div>
      <div class="InfoInput__wapper --false">
        <div class="InfoInput__wapper__title --false">비밀번호</div>
        <div class="InfoInput__wapper__inputBox --false">
          <input
            type="password"
            class="InfoInput__wapper__inputBox__input --false"
            placeholder="••••••••"
            v-model="pw"
            readonly={true}
          />
        </div>
        <span class="InfoInput__wapper__inputBox__warning --false">
          * 영문, 숫자 포함 8자리 이상 16자리 이하
        </span>
      </div>
      <div class="InfoInput__wapper pwcheck --false">
        <div class="InfoInput__wapper__title --false">비밀번호 확인</div>
        <div class="InfoInput__wapper__inputBox --false">
          <input
            type="password"
            class="InfoInput__wapper__inputBox__input --false"
            placeholder="••••••••"
            v-model="pwcheck"
            readonly={true}
          />
        </div>
      </div>
    </div>
    <AcceptDisableButton />
  </div>
);

export default InformationDisableInputBox;
