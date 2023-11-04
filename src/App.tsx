import { SidebarProvider } from "contexts/SidebarContexts";
import { PageHeader } from "layouts/PageHeader";
import { RouteHome } from "routes/RouteHome";

function App() {

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
      <PageHeader />
      
        <RouteHome />
      
    </div>
    </SidebarProvider>
  );
}

export default App;
