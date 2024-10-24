import styles from "./contact-me.module.scss";
import Button from "../Button/button.component";

type propsType = {};

export default function ContactMe(props: propsType): JSX.Element {
  return (
    <div id="Contact" className="flex justify-center mt-60">
        <div className={`${styles.innerMainContainer} max-w-96 flex-grow`}>
      <div className="text-center text-4xl font-bold mb-12">Contact Me</div>
      <div className={`${styles.subMainContainer} bg-slate-500 rounded-lg p-10`}>
        <div><input type="text" placeholder="Name" /></div>
        <div><input type="text" placeholder="Email" /></div>
        <div><textarea placeholder="Message" /></div>
        <div className="text-center"><Button>Submit</Button></div>
      </div>
      </div>
    </div>
  );
}