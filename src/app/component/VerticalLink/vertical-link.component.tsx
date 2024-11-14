import styles from "./vertical-link.module.scss";
import type { verticalLink } from "@/app/constants/Types/api-data";
import Link from "next/link";

type propsType = {
  verticalLink: verticalLink[];
};

export default function VerticalLink(props: propsType): JSX.Element {
  return (
    <div className={`${styles.mainContainer} absolute right-32 top-14`}>
      <div className={`${styles.verticalDashContainer} ab `}>
        <div className={`${styles.verticalDash} mx-auto`}></div>
      </div>
      <div className="my-2">
        {props.verticalLink && props.verticalLink.map((item, index) => (
          <Link  key={index} href={item.url}>
            <div className={`${styles.verticalLinkContainer} rounded-full my-2`}>
              <img className={`w-7 h-7 bg-${item.name === "Github" ? "white rounded-full" : "transparent"}`} src={item.icon} alt={item.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
