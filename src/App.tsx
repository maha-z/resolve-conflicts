import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import properties from './core-utils/properties';
import {
  HOME_ROUTE
} from './core-utils/routes';
import ErrorBoundary from './wrappers/ErrorBoundary';
import ThemeWrapper from './wrappers/ThemeWrapper';
import messages from './core-utils/messages';
import { RenderCtrlProvider } from 'react-render-ctrl';


const App: React.FC = () => {

  const idleTimer = React.useRef<any>(null);
  return (
    <React.StrictMode>
      <CssBaseline>
        <ThemeWrapper>

                <RenderCtrlProvider
                  ErrorComponent={() => <div>default error hint</div>}
                  EmptyComponent={() => <div>default empty hint</div>}
                  LoadingComponent={() => <div>default loading hint</div>}
                >
                  <ErrorBoundary>
                    
                        <>
                          <BrowserRouter >
                            <React.Suspense fallback={<div />}>
                              <Switch>

                              <Route
                                  path={HOME_ROUTE}
                                  component= {() => (<div> home </div>)}
                                />
                                
                              </Switch>

                            </React.Suspense>

                          </BrowserRouter>
                        </>
                  </ErrorBoundary>
                </RenderCtrlProvider>
             
        </ThemeWrapper>
      </CssBaseline>
    </React.StrictMode>
  );
};



export default App;
