import { debounce } from 'debounce';
import React from 'react';

const clientSize = {
  clientHeight: 0,
  clientWidth: 0
};

export interface WithClientSize {
  clientSize: typeof clientSize;
}

const { Consumer, Provider } = React.createContext<
  WithClientSize['clientSize']
>(clientSize);

function withClientSize<TOutter>(
  WrappedComponent: React.FC<TOutter & WithClientSize>
): React.FC<TOutter & WithClientSize> {
  const ClientSize: React.FC<TOutter & WithClientSize> = props => {
    const { clientHeight, clientWidth } = React.useMemo(() => {
      if (typeof window === 'undefined') {
        return {
          clientHeight: 0,
          clientWidth: 0
        };
      }

      const {
        document: {
          documentElement: { clientHeight, clientWidth }
        }
      } = window;

      return { clientHeight, clientWidth };
    }, []);

    const [clientSize, setCurrentClientSize] = React.useState({
      clientHeight,
      clientWidth
    });

    React.useEffect(() => {
      const handleResize = () => {
        const {
          documentElement: { clientHeight, clientWidth }
        } = document;

        setCurrentClientSize({ clientHeight, clientWidth });
      };

      handleResize();

      window.addEventListener('resize', debounce(handleResize, 250));

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [setCurrentClientSize]);

    return (
      <Provider value={clientSize}>
        <Consumer>
          {value => <WrappedComponent {...props} clientSize={value} />}
        </Consumer>
      </Provider>
    );
  };

  return ClientSize;
}

export default withClientSize;
