// ListHeader.js
import Link from "next/link";

export const ListHeader = ({ liheader, route_link }) => {
  return (
    <li className="list-none text-neutral-950"> 
      <Link  href={route_link}>
          {liheader}
        </Link>
     
    </li>
  );
};
