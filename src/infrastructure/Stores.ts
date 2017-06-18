import PraiceInfoStore, { PRAICE_INFO_STORE } from '../components/praicepanel/PraiceInfoStore';

import FooterStore, {FOOTER_STORE} from '../components/footer/FooterStore';

export default {
    [FOOTER_STORE]: new FooterStore(),
    [PRAICE_INFO_STORE]: new PraiceInfoStore()
};