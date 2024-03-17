import { ChangeEvent, memo, useMemo } from 'react';
import clsx from 'clsx';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    withDisabledValue?: boolean;
    withDefaultAllOption?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        withDisabledValue = false,
        label,
        options,
        onChange,
        value,
        readonly,
        withDefaultAllOption,
    } = props;
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={clsx(className)}>
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {withDisabledValue && <option disabled selected> -- select an option -- </option>}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {withDefaultAllOption && <option value="all"> -- ALL -- </option>}
                {optionsList}
            </select>
        </div>
    );
});
