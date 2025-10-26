import Banner from "./components/Banner";
import Explantation from "./components/Explanation";
import CallToAction from "./components/CallToAction";
import InstallationStep from "./components/InstallationStep";
import Suggestion from "./components/Suggestion";
import Effect from "./components/Effect";

export default function Install() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Suggestion />
      <Explantation />
      <Effect />
      <InstallationStep />
      <CallToAction />
    </div>
  );
}
