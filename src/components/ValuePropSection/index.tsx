import * as React from "react";

import HomePageData from "../../../content/homepage.json";
import { Ornament_1, Ornament_2 } from "./svgs";

const ValuePropSection = () => {
  let { value_prop_paragraph, value_prop_title } = HomePageData;
  value_prop_paragraph = value_prop_paragraph.replace(
    /(?:\r\n|\r|\n)/g,
    "<br>"
  );
  return (
    <section className="value-prop">
      <h2>{value_prop_title}</h2>
      <p dangerouslySetInnerHTML={{ __html: value_prop_paragraph }} />
      <div className="value-prop__ornament-1">
        <Ornament_1 />
      </div>
      <div className="value-prop__ornament-2">
        <Ornament_2 />
      </div>
    </section>
  );
};

export default ValuePropSection;
