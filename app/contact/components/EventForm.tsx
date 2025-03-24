import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function EventForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#19247C" }, "dark": { "cal-brand": "#19247C" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="martin-maiaru-5e6boq/30min"
    style={{ width: "100%", height: "100%", overflow: "scroll" }}
    config={{ "layout": "month_view" }}
  />;
};
