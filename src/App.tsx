import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./pages/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile">
              <ProtectedLayout>
                <h2>Proflie Page</h2>
              </ProtectedLayout>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
