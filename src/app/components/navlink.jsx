import React from "react";
import Link from "next/link";

const Navlink = (props) => {
  return (
    <Link
      className="flex items-center ml-8 my-3 lg:my-0"
      href={props.href || "/"}
    >
      <span className={"hover:text-green-600"}>{props.title}</span>
    </Link>
  );
};

export default Navlink;
