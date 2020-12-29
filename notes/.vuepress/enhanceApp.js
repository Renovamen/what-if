import VueIcon from 'oh-vue-icons/components/Icon'

import {
  FaGithub, FaGitlab, FaBitbucket, FaShareAlt, FaPencilAlt,
  RiSunLine, RiMoonLine, FaMagic
} from 'oh-vue-icons/icons'

VueIcon.add([
  FaGithub, FaGitlab, FaBitbucket, FaShareAlt, FaPencilAlt,
  RiSunLine, RiMoonLine, FaMagic
])

export default ({
  Vue,
  siteData,
  isServer
}) => {
  Vue.component('v-icon', VueIcon)
}