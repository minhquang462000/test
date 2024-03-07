import React from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import { MdSupportAgent } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import logoImg from "../../public/images/211855-logo-2020.png";

const MainHeader = () => {
  return (
    <div>
      <div>
        <span>
          {" "}
          <RxTextAlignJustify />
        </span>

        <span>
          <img src={logoImg} alt="logo" />
        </span>
      </div>
      <div>
        <div>
          <div>
            <span>Lịch hẹn</span>
            <span>
              <GiBackwardTime />
            </span>
          </div>
          <div>
            <span>Hỗ trợ</span>
            <span>
              <MdSupportAgent />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
