"use client"; 
import { useState } from "react";
import styles from "./contact-me.module.scss";
import SectionHeader from "../SectionHeader/section-header.component";
import Button from "../Button/button.component";
import contactFormAction from "../../../actions/contactFormAction";

export default function ContactMe(): JSX.Element {

  const [outputMessage, setOutputMessage] = useState<string>("");

  const handleFormAction = async (formData: FormData) => {
    setOutputMessage(await contactFormAction(formData));
  }

  return (
    <div id="Contact" className="flex justify-center mt-60">
        <div className={`${styles.innerMainContainer} max-w-96 flex-grow`}>
      <SectionHeader title={'Contact Me'} />
      <div className={`${styles.subMainContainer} text-black bg-slate-800 shadow-2xl shadow-slate-700 rounded-lg p-10`}>
        <form action={handleFormAction} className={`${styles.formContainer} flex flex-col`}>
        <div><input type="text" name={"name"} required placeholder="Name" /></div>
        <div><input type="text" name={"email"} required placeholder="Email" /></div>
        <div><textarea name={"message"} required placeholder="Message" /></div>
        {outputMessage && <div className="text-center text-white">{outputMessage}</div>}
        <div className="flex justify-center"><Button type="submit" onClick={() => setOutputMessage("Sending...")} customTW="text-white bg-green-600 hover:!text-black hover:bg-green-300 border-green-600">Submit</Button></div>
        </form>
      </div>
      </div>
    </div>
  );
}
