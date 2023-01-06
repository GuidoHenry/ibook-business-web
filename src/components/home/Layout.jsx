import React, { useEffect, useState } from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Layout = (props) => {
  const [compactType, setcompactType] = useState(false);
  const [mounted, setmounted] = useState(false);
  const [layout, setlayout] = useState([
    { i: "mesa 1", x: 0, y: 0, w: 1, h: 2 },
    { i: "mesa 2", x: 1, y: 0, w: 3, h: 2 },
    { i: "mesa 3", x: 4, y: 0, w: 1, h: 2 },
    { i: "mesa 4", x: 0, y: 2, w: 1, h: 2 }
  ]);

  useEffect(() => {
    setmounted(true);
  }, []);



  return (
    <ResponsiveReactGridLayout
      {...props}
      rowHeight={30}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      layout={layout}
      // onLayoutChange={this.onLayoutChange}
      // WidthProvider option
      measureBeforeMount={false}
      useCSSTransforms={false}
      compactType={null}
      preventCollision={!compactType}
      
      isDroppable={false}
    >
      {layout.map((itm, i) => (
          <div key={itm.i} data-grid={itm} style={{
            background: 'skyblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} className="text">
            {itm.i}
          </div>
      ))}

    </ResponsiveReactGridLayout>
  );
}
export default Layout