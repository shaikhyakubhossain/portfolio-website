import Button from "../Button/button.component";

type propsType = {};

export default function ContactMe(props: propsType): JSX.Element {
  return (
    <div>
      <div>Contact Me</div>
      <div className="">
        <div><input type="text" /></div>
        <div><input type="text" /></div>
        <div><textarea name="" id="" /></div>
        <div><Button>Submit</Button></div>
      </div>
    </div>
  );
}
