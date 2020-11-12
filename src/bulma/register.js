import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import Notification from './components/navbar/Notifications.vue';
import ToastPosition from './components/settings/ToastrPosition.vue';

Vue.component('navbar-notification', Notification);
Vue.component('setting-toaster-position', ToastPosition);
App.registerNavbarItem('navbar-notification', 300);
App.registerSettingsItem('setting-toaster-position', 300);
