import { IRelation, ITrait } from './PraiceInfoStore';
import {useStrict, observable, action, computed} from 'mobx';
import {IProfile} from "../profile/ProfileStore";

useStrict(true);

export default class PraicePanelStore {
    @observable private _profile: IProfile;
    @observable private _selectedTraits: { [key: string]: ITrait } | {} = {};
    @observable private _selectedRelation: IRelation;
    @observable private _stepIndex: number = 0;

    constructor(profile: IProfile) {
        this._profile = profile;
    }

    @action
    addTrait(categoryId: string, trait: ITrait) {
        this._selectedTraits[categoryId] = trait;
    }
    @action
    getAddedTrait(categoryId: string): ITrait {
        return this._selectedTraits[categoryId];
    }

    @action
    addRelation(relation: IRelation) {
        this._selectedRelation = relation;
    }
    @action
    getAddedRelation(): IRelation {
        return this._selectedRelation;
    }

    @action
    nextStep() {
        this._stepIndex++;
    }
    @action
    previousStep() {
        this._stepIndex--;
    }

    @computed
    get currentIndex() {
        return this._stepIndex;
    }
}