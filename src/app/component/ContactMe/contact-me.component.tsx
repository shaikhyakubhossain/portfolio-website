import styles from "./contact-me.module.scss";
import Button from "../Button/button.component";
import SectionHeader from "../SectionHeader/section-header.component";

type propsType = {};

export default function ContactMe(props: propsType): JSX.Element {
  return (
    <div id="Contact" className="flex justify-center mt-60">
        <div className={`${styles.innerMainContainer} max-w-96 flex-grow`}>
      <SectionHeader title={'Contact Me'} />
      <div className={`${styles.subMainContainer} text-black bg-slate-800 shadow-2xl shadow-slate-700 rounded-lg p-10`}>
        <div><input type="text" placeholder="Name" /></div>
        <div><input type="text" placeholder="Email" /></div>
        <div><textarea placeholder="Message" /></div>
        <div className="text-center"><Button>Submit</Button></div>
      </div>
      </div>
    </div>
  );
}
