import * as React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import {IRelation} from "./PraiceInfoStore";

export interface IProps {
    relations: IRelation[],
    selectedRelationId: number,
    clickRelation(trait: IRelation): void
}

// Dumb/stateless component
const RelationPanel = (props: IProps) => {
    const { relations, selectedRelationId, clickRelation } = props;

    return <RelationContainer>
        <div>Relation</div>
        {relations.map(relation => {
            return (
                <RelationElement key={relation.id}>
                    <Relation
                        onClick={() => clickRelation(relation)}
                        selected={selectedRelationId === relation.id}
                    >
                        {relation.name}
                    </Relation>
                </RelationElement>
            )
        })}
    </RelationContainer>;
}

type RelationProps = ThemedStyledProps<{selected: boolean}, any>;

const RelationContainer = styled.ul`
    color: #fff;
    background-color: #000;
    padding: 15px;
`;

const RelationElement = styled.li`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    user-select: none;
`;

const Relation = styled.div`
    transition: .3s ease-in-out all;
    cursor: pointer;
    padding: 15px;
    color: ${(props: RelationProps) => props.selected ? '#000' : '#fff'};
    background-color: ${(props: RelationProps) => props.selected ? '#fff' : '#000'};
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid ${(props: RelationProps) => props.selected ? '#000' : '#fff'};;
    border-radius: 10px;
` as ThemedStyledProps<any, {selected: boolean}>;

export default RelationPanel;
