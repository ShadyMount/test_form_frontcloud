import {FC, useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './TextArea.module.scss'
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";

interface TextAreaProps {
    className?: string;
    value: string;
    limit: number;
    placeholder?:string;
    tip?: string;
    label?:string;
    id?: string;
    onChange: (newValue: string) => void
}

export const TextArea: FC<TextAreaProps> = (props) => {
    const {className,value, limit = 200, tip, placeholder, label, id, onChange} = props


    const setFormattedContent = useCallback(
        (text: string) => {
            onChange(text.slice(0, limit));
        },
        [limit]
    );
    const counter = value.replaceAll(' ', '').length
    return (
        <VStack max gap={8}>
            {label && <Text text={label}/>}
              <textarea
                  className={classNames(styles.TextArea, {}, [className])}
                  id={id}
                  onChange={event => setFormattedContent(event.target.value)}
                  value={value}
                  placeholder={placeholder}
                  maxLength={limit}
              />
            <HStack max justify={'between'}>
                <span>{tip}</span>
                <p>
                Символов без пробелов: {counter}/{limit}
                </p>
            </HStack>

        </VStack>
    );
};
