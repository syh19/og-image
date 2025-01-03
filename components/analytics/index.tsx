import BaiDuAnalytics from "./BaiDuAnalytics";
import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";
import OpenPanelAnalytics from "./OpenPanel";
import PlausibleAnalytics from "./PlausibleAnalytics";

export function AnalyticsIndex() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* plausible analytics */}
      <PlausibleAnalytics />

      {/* openpanel analytics */}
      <OpenPanelAnalytics />

      {/* google analytics */}
      <GoogleAnalytics />

      {/* microsoft clarity */}
      <MicrosoftClarity />

      {/* baidu analytics */}
      <BaiDuAnalytics />
    </>
  );
}
