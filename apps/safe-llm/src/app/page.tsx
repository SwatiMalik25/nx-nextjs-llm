

import { Button } from '@nx-nextjs-llm/shared';
import Link from "next/link"

export default async function Index(): JSX.IntrinsicElements {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-600">
      <h1 className="text-6xl text-white">Hello World</h1>
      <Button variant={'destructive'}>Shared button</Button>
    </div>
  );
}