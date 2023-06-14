import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: 'button' | 'submit',
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean,
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    //because of server side issue had to add line below not sure why type number does not work
    setFilter: (value: any) => void
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    //because of server side issue had to add line below not sure why type number does not work
    setLimit: (value: number) => any
}