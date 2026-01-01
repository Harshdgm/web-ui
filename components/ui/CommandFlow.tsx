import React from 'react'


export default function CommandFlow() {
  return (
    <div className="text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
        <div className="p-4 font-mono text-sm bg-[var(--backgroundLight)] text-foreground">
            <pre className="whitespace-pre">npm install</pre>
            <pre className="whitespace-pre">npm run dev</pre>
            <pre className="whitespace-pre">npx biome check .</pre>
            <pre className="whitespace-pre">npx biome format .</pre>
            <pre className="whitespace-pre">git status</pre>
            <pre className="whitespace-pre">git add .</pre>
            <pre className="whitespace-pre">git commit -m `message`</pre>
            <pre className="whitespace-pre">git push origin `branch name`</pre>
            <pre className="whitespace-pre">git pull</pre>
        </div>
    </div>
  )
}
