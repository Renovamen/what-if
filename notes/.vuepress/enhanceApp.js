import OhVueIcon from "oh-vue-icons";

import {
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaShareAlt,
  FaPencilAlt,
  RiSunLine,
  RiMoonLine,
  FaMagic,
  RiMenuLine
} from "oh-vue-icons/icons";

OhVueIcon.add(
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaShareAlt,
  FaPencilAlt,
  RiSunLine,
  RiMoonLine,
  FaMagic,
  RiMenuLine
);

export default ({ Vue, siteData, isServer }) => {
  Vue.component("VIcon", OhVueIcon);
};
