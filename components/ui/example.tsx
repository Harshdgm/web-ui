"use client";

import { useState } from "react";
import CommonModal from "@/components/ui/CommonModal";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md border px-4 py-2"
      >
        Open Modal
      </button>

      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        title="Configure MCP"
        subtitle="Copy and paste the following code into your project's components.json."
        code={`{
  "registries": {
    "@ncdai": "https://chanhdai.com/r/{name}.json"
  }
}`}
      />
    </>
  );
}
