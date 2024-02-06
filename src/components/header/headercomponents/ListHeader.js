import Link from "next/link";

export const ListHeader = ({ liheader, route_link }) => {
  return (
    <li className="list-none text-neutral-950 "> 
      <Link  href={route_link} className="text-neutral-950 hover:text-orange-600 hover:transform hover:translate-y-2 transition-transform capitalize">
          {liheader}
        </Link>
     
    </li>
  );
};
