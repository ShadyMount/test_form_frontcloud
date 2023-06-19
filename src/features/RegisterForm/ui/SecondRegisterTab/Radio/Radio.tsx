import {FC} from 'react';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {registerFormActions} from "../../../model/slices/registerFormSlice";
import {MyRadioGroup} from "shared/ui/MyRadioGroup/MyRadioGroup";
import {useSelector} from "react-redux";
import {getFormData} from "../../../model/selectors/registerFormSelectors";

interface RadioProps {
    className?: string;
}

export const Radio: FC<RadioProps> = ({className}) => {
    const items = ['1', '2', '3']
    const {radio} = useSelector(getFormData)
    const dispatch = useAppDispatch()

    const onChange = (value: number) => {
        dispatch(registerFormActions.setRadio(value))
    }
    return (
        <MyRadioGroup items={items} onChange={onChange} value={radio} />
    );
};
