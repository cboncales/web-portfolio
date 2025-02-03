import { useEffect } from "react";
import { useSelector } from "react-redux";

const CustomHook = (refTab) => {
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    console.log(activeTab, refTab.current);
    if (refTab?.current) {
      if (activeTab.toLowerCase() === "contact") {
        // Ensure it matches correctly
        refTab.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeTab, refTab]);
};

export default CustomHook;
