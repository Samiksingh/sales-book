import React from "react";
import Link from "next/link";

const Navlink = (props) => {
  return (
    <Link
      className="flex items-center ml-8 my-3 lg:my-0"
      href={props.href || "/"}
    >
      <span className={props.active ? "text-white" : "text-grey-500"}>
        {props.title}
      </span>
    </Link>
  );
};

export default Navlink;
