import PlausibleAnalytics from "./PlausibleAnalytics";

export function AnalyticsIndex() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* plausible analytics */}
      <PlausibleAnalytics />
    </>
  );
}
