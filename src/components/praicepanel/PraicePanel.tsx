import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import PraiceInfoStore, {PRAICE_INFO_STORE, ITrait, IRelation} from './PraiceInfoStore';
import {inject, observer} from 'mobx-react';
import PraicePanelStore from "./PraicePanelStore";
import CategoryPanel from './CategoryPanel';
import RelationPanel from './RelationPanel';
import colors from './CategoryColors';
import ApiStatus from '../../infrastructure/api/apiStatus';
import Navigation from './Navigation';

interface IProps {
    store: PraicePanelStore
}

@inject(PRAICE_INFO_STORE) @observer
export default class PraicePanel extends React.Component<IProps, void> {
    private PraicePanelStore: PraicePanelStore;
    private PraiceInfoStore: PraiceInfoStore;

    constructor(props: IProps & {PRAICE_PANEL_STORE: PraiceInfoStore}) {
        super(props);

        this.PraicePanelStore = props.store;
        this.PraiceInfoStore  = props[PRAICE_INFO_STORE];

        this.addTrait = this.addTrait.bind(this);
        this.getSelectedTraitId = this.getSelectedTraitId.bind(this);

        this.addRelation = this.addRelation.bind(this);
        this.getSelectedRelationId = this.getSelectedRelationId.bind(this);

        this.previousStep = this.previousStep.bind(this);
        this.nextStep = this.nextStep.bind(this);

        this.isTraitSelectedInCurrentIndex = this.isTraitSelectedInCurrentIndex.bind(this);
    }

    addTrait(categoryId: string, trait: ITrait) {
        this.PraicePanelStore.addTrait(categoryId, trait);
        this.PraicePanelStore.nextStep();
    }

    getSelectedTraitId(categoryId: string): string {
        const trait = this.PraicePanelStore.getAddedTrait(categoryId);

        if (trait) {
            return trait.id;
        } else {
            return '';
        }
    }

    isTraitSelectedInCurrentIndex(index: number): boolean {
        const categoryId = this.PraiceInfoStore.getCategoryIdForIndex(index);
        const traitId = this.getSelectedTraitId(categoryId);

        return !!traitId;
    }

    getSelectedRelationId(): number {
        const relation = this.PraicePanelStore.getAddedRelation();

        if (relation) {
            return relation.id;
        } else {
            return -1;
        }
    }

    addRelation(relation: IRelation) {
        this.PraicePanelStore.addRelation(relation);
        this.PraicePanelStore.nextStep();
    }

    previousStep() {
        this.PraicePanelStore.previousStep();
    }
    nextStep() {
        this.PraicePanelStore.nextStep();
    }

    private _renderSuccess() {
        const { categories, relations } = this.PraiceInfoStore.info;

        const { currentIndex } = this.PraicePanelStore;
        return (
            <Container>
                {categories.map((category, index) =>
                    <CategoryContainer
                        key={category.id}
                        active={index === currentIndex}>
                        <CategoryPanel
                            colors={colors[index]}
                            traits={category.traits}
                            category={category}
                            selectedTraitId={this.getSelectedTraitId(category.id)}
                            clickTrait={(trait: ITrait) => this.addTrait(category.id, trait)}
                        />
                    </CategoryContainer>
                )}

                <RelationContainer active={categories.length && currentIndex === categories.length}>
                    <RelationPanel
                        relations={relations}
                        selectedRelationId={this.getSelectedRelationId()}
                        clickRelation={this.addRelation}
                    />
                </RelationContainer>

                <Navigation
                    showPrevious={currentIndex > 0}
                    disablePrevious={false}
                    previous={this.previousStep}
                    showNext={currentIndex < categories.length + 1}
                    disableNext={this.isTraitSelectedInCurrentIndex(currentIndex)}
                    next={this.nextStep}
                />
            </Container>
        )
    }

    private _renderError() {
        return <div>Error</div>;
    }

    private _renderRequest() {
        return <div />;
    }

    render() {
        const { apiStatus } = this.PraiceInfoStore;

        switch (apiStatus) {
            case ApiStatus.Error:
                return this._renderError();
            case ApiStatus.Success:
                return this._renderSuccess();
            default:
                return this._renderRequest();
        };
    }
}

 const Container = styled.ul`
    display: block;
`;

type CategoryContainerProps = ThemedStyledProps<{active: boolean}, any>;
type RelationContainerProps = ThemedStyledProps<{active: boolean}, any>;
const CategoryContainer = styled.li`
    display: ${(props: CategoryContainerProps) => props.active ? 'block' : 'none'};
    transition: .5s ease-in-out all;
    opacity: ${(props: CategoryContainerProps) => props.active ? 1 : 0};
` as ThemedStyledProps<any, void>;

const RelationContainer = styled.li`
    display: ${(props: RelationContainerProps) => props.active ? 'block' : 'none'};
` as ThemedStyledProps<any, void>;