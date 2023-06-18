import React, {FC, ReactNode, useState} from 'react';
import { Tab } from '@headlessui/react'
import styles from './Tabs.module.scss';
import DoneIcon from 'shared/assets/icons/Done.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {HStack, VStack} from "shared/ui/Stack";
import {FirstRegisterTab} from "features/RegisterForm/ui/FirstRegisterTab/FirstRegisterTab";
import {SecondRegisterTab} from "features/RegisterForm/ui/SecondRegisterTab/SecondRegisterTab";
import {ThirdRegisterTab} from "features/RegisterForm/ui/ThirdRegisterTab/ThirdRegisterTab";
import {classNames} from "shared/lib/classNames";

export interface TabItem {
    value: string,
    content: ReactNode
}
interface TabsProps {
    className?: string;
    value?: string;
}



export const Tabs: FC<TabsProps> = (props) => {
    const {
        className,
    } = props;
    const [currentTab, setCurrentTab] = useState(0)
    const tabs:TabItem[] = [
        {
            value: '1',
            content: <FirstRegisterTab setCurrentTab={setCurrentTab} />
        },
        {
            value: '2',
            content: <SecondRegisterTab setCurrentTab={setCurrentTab} />
        },
        {
            value: '3',
            content: <ThirdRegisterTab setCurrentTab={setCurrentTab} />
        }
    ]
    const progress = currentTab / (tabs.length - 1) * 100;


    return (
        <VStack max gap={24} className={classNames(styles.Tabs, {}, [className])}>
                <Tab.Group
                    selectedIndex={currentTab}
                    onChange={(ind) => setCurrentTab(ind)}
                >
                    <Tab.List className={styles.tabList}>
                        <div className={styles.tabListLineContainer} />
                        <div className={styles.tabListLine} style={{width: `${progress}%`}} />

                        {
                            tabs.map((tab, tabInd) => (
                                        <Tab
                                            key={tab.value}
                                            className={tabInd <= currentTab ? styles.tabActive : styles.tab}
                                            // onClick={clickHandler(tab)}
                                        >
                                            {
                                                ({selected}) => (
                                                    <>
                                                        {
                                                            !selected && tabInd < currentTab
                                                                ? <Icon Svg={DoneIcon} />
                                                                : (selected && <span
                                                                    className={styles.current}
                                                                />)

                                                        }
                                                        <span className={tabInd <= currentTab ? styles.tabIndActive : styles.tabInd}>{tabInd + 1}</span>
                                                    </>
                                                )

                                            }
                                        </Tab>
                                    ))
                        }
                    </Tab.List>

                    <Tab.Panels className={styles.tabPanels}>
                        {
                            tabs.map((tab) => (
                                <Tab.Panel
                                    key={tab.value}
                                    className={styles.tabPanel}
                                >
                                    {tab.content}
                                </Tab.Panel>
                            ))
                        }
                    </Tab.Panels>
                </Tab.Group>
        </VStack>
    );
};
