

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button } from '../../../../shared/src/components/ui/button';
import Layout from '../../../safe-llm/src/app/components/layout';
import About from '../../../safe-llm/src/app/about/page';
import Contact from '../app/contact/page'

export default async function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-600">
      <h1 className="text-6xl text-white">SafeLLM</h1>
      <Button variant={'destructive'}>Shared button</Button>
    <Layout>
    <h1>Welcome to Our Landing Page</h1>
    <About>

    </About>
    <Contact>

    </Contact>
  </Layout>
  </div>
  );
}

    
    

