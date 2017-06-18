import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import {ICategory, ITrait} from "./PraiceInfoStore";

interface IProps {
    category: ICategory,
    traits: ITrait[],
    selectedTraitId: string,
    colors: {
        trait: ITraitColor
    } & ICategoryColor,

    clickTrait(trait: ITrait): void
}

const CategoryPanel = (props: IProps) => {
    const { category, traits, clickTrait, selectedTraitId, colors } = props;

    return (
        <CategoryContainer colors={colors} bla={colors}>
            <div>{category.name}</div>
            {traits.map(trait => {
                return (
                    <TraitContainer key={trait.id}>
                            <Trait
                                onClick={() => clickTrait(trait)}
                                colors={colors.trait}
                                selected={selectedTraitId === trait.id}
                            >
                                {trait.name}
                            </Trait>
                    </TraitContainer>
                );
            })}
        </CategoryContainer>
    );
};

export interface ICategoryColor {
    defaultText: string;
    defaultBackground: string;
}
export interface ITraitColor {
    defaultText: string;
    defaultBackground: string;
    selectedText: string;
    selectedBackground: string;
}

type CategoryProps = ThemedStyledProps<{colors: ICategoryColor}, any>;
type TraitProps = ThemedStyledProps<{selected: boolean, colors: ITraitColor}, any>;

const CategoryContainer = styled.ul`
    color: ${(props: CategoryProps) => props.colors.defaultText};
    background-color: ${(props: CategoryProps) => props.colors.defaultBackground};
    padding: 15px;
` as ThemedStyledProps<any, {}>;

const TraitContainer = styled.li`
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    padding: 7.5px;
    user-select: none;
    &:nth-child(odd) {
        padding-right: 0;
    }
    &:nth-child(even) {
        padding-left: 0;
    }
`;

const Trait = styled.button`
    transition: .3s ease-in-out all;
    cursor: pointer;
    padding: 15px;
    display: block;
    width: 100%;
    outline: none;
    color: ${(props: TraitProps) => props.selected ? props.colors.selectedText : props.colors.defaultText};
    background-color: ${(props: TraitProps) => props.selected ? props.colors.selectedBackground : props.colors.defaultBackground};
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid ${(props: TraitProps) => props.selected ? props.colors.selectedBackground : props.colors.defaultText};
    border-radius: 10px;
` as ThemedStyledProps<any, void>;

export default CategoryPanel;