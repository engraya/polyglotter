import React from "react";
import { IoLink } from "react-icons/io5";

const LinkPaste = ({ handleLinkPaste }) => (
  <label htmlFor="link-input" className="cursor-pointer">
    <IoLink color="white" size={21} />
    <input
      type="text"
      id="link-input"
      className="hidden"
      onChange={handleLinkPaste}
    />
  </label>
);

export default LinkPaste;
