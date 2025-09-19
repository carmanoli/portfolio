import { Link } from 'react-router-dom';
import { Code, Wrench } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-2 p-4">
      <h1 className="px-2 text-lg font-semibold tracking-tight">
        Portfolio
      </h1>
      <nav className="grid gap-1">
<Link 
  to="/projects/software" 
  className="flex items-center px-2 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
>
  <Code className="w-5 h-5 mr-2" />
  <span>Software Development</span>
</Link>
<Link 
  to="/projects/maker" 
  className="flex items-center px-2 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
>
  <Wrench className="w-5 h-5 mr-2" />
  <span>Maker & IoT</span>
</Link>



<Link 
  to="/projects/Network" 
  className="flex items-center px-2 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
>
  <Wrench className="w-5 h-5 mr-2" />
  <span>Network</span>
</Link>




      </nav>
    </aside>
  );
}