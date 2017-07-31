import { observer } from 'mobx-react';
import NotFound from './NotFoundPage';
import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import ProfileStore from '../components/profile/ProfileStore';
import ApiStatus from '../infrastructure/api/apiStatus';
import PraicePanel from "../components/praicepanel/PraicePanel";
import PraicePanelStore from "../components/praicepanel/PraicePanelStore";

@observer
export default class ProfilePage extends React.Component<RouteComponentProps<{id : string}>, {}> {
    private ProfileStore: ProfileStore;
    private profileId: string;

    constructor(props: RouteComponentProps<{id : string}>) {
        super(props);

        const { id } = props.match.params;

        this.ProfileStore = new ProfileStore(id);

        this.profileId = id;
    }

    private _renderRequest() {
        return <div>Loading</div>;
    }

    private _renderError() {
        return <NotFound />;
    }

    private _renderSuccess() {
        const {profile} = this.ProfileStore;

        return (
            <div>
                <div>{profile.firstName} {profile.lastName}</div>
                <PraicePanel store={new PraicePanelStore(profile)} />
            </div>
        );
    }

    render() {
        const { apiStatus } = this.ProfileStore;

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
