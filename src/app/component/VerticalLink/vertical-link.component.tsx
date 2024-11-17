import styles from "./vertical-link.module.scss";
import Image from "next/image";
import Link from "next/link";
import type { verticalLink } from "@/app/constants/Types/api-data";

type propsType = {
  verticalLink: verticalLink[];
};

export default function VerticalLink(props: propsType): JSX.Element {
  return (
    <div className={`${styles.mainContainer} absolute right-40 max-[680px]:right-4 top-14`}>
      <div className={`${styles.verticalDashContainer}`}>
        <div className={`${styles.verticalDash} mx-auto`}></div>
      </div>
      <div className="my-2">
        {props.verticalLink && props.verticalLink.map((item, index) => (
          <Link  key={index} href={item.url}>
            <div className={`${styles.verticalLinkContainer} rounded-full my-4`}>
              <Image width={28} height={28} style={{backgroundColor: item.name === "Github" ? "white" : "transparent", borderRadius: item.name === "Github" ? "50%" : "0"}}  src={item.icon} alt={item.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
