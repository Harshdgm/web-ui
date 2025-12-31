"use client";

import CommonGridRow from "@/components/common/TestGrid";
import { testOptions } from "@/constant/testOptions";

export default function TestOptions() {
  return (
    <div>
      {testOptions.map((item, index) => (
        <CommonGridRow
          key={index}
          left={<p>{item.left}</p>}
          right={<p>{item.right}</p>}
        />
      ))}
    </div>
  );
}
