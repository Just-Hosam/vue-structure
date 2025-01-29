import ProfileView from "../views/ProfileView.vue";
import SettingsView from "../views/SettingsView.vue";

export default [
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];
