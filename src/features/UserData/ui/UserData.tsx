import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './UserData.module.scss'
import {Avatar} from "shared/ui/Avatar/Avatar";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {HStack, VStack} from "shared/ui/Stack";
import {Icon} from "shared/ui/Icon/Icon";
import FolderIcon from "shared/assets/icons/Folder.svg"

interface UserDataProps {
    className?: string;
}

export const UserData: FC<UserDataProps> = ({className}) => {
    return (
        <HStack gap={24} className={classNames(styles.UserData, {}, [className])}>
            <Avatar src={'https://avatars.githubusercontent.com/u/88830658?v=4'} />
            <VStack>
            <p>Shady Mount</p>
                <HStack gap={16}>
                    <AppLink to={'https://t.me/shady_mount'} >
                        <HStack gap={4} align={'center'}>
                        <Icon Svg={FolderIcon} />
                        <span>Telegram</span>
                        </HStack>
                    </AppLink>
                    <AppLink to={'https://github.com/ShadyMount'} >
                        <HStack gap={4} align={'center'}>
                            <Icon Svg={FolderIcon} />
                            <span>Github</span>
                        </HStack>
                    </AppLink>
                    <AppLink to={'https://pyatigorsk.hh.ru/resume/1e52b545ff03f9cdbe0039ed1f754f346f7457'} >
                        <HStack gap={4} align={'center'}>
                            <Icon Svg={FolderIcon} />
                            <span>Resume</span>
                        </HStack>
                    </AppLink>
                </HStack>
            </VStack>
        </HStack>
    );
};
