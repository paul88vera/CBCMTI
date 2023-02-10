import What from "../components/What";
import Faq from "../components/Faq";
import Apply from "../components/Apply";
import Subnav from "../components/Subnav";
import Emphasis from "../components/Emphasis";
import Provide from "../components/Provide";

export default function Home() {
  return (
    <div>
      <Subnav />
      <What />
      <Provide />
      <Emphasis />
      <Apply />
      <Faq />
    </div>
  );
}
