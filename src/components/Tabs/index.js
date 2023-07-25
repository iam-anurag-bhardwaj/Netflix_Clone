import React, { useState } from 'react'
import Tabs from "./Tabs";
import { tabLabels } from './constants';

const TabComponent = () => {
   const [activeTab, setActiveTAb] = useState(tabLabels.CANCLE_AT_ANY_TIME);

   const onClickTab = (tab) => {
      setActiveTAb(tab);
   }
   return(
      <>
         <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
      </>
   )
}

export default TabComponent;
