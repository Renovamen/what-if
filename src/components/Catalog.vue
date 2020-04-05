<template>
    <div v-if="subtitles.length > 1 && subtitles[0].depth !== 3" class="sidebar sidebar--right hide-for-small">
        <h3>Catalog</h3>
        <ul v-if="subtitles.length" class="menu-item submenu toc-container">
            <!-- replace old catalog by tocbot.js -->
            <!-- 
            <li class="submenu__item" :class="'submenu__item-depth-' + subtitle.depth" v-for="subtitle in subtitles" :key="subtitle.value">
                <a class="submenu__link" :href="subtitle.anchor">
                    {{ subtitle.value }}
                </a>
            </li> 
            -->
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        subtitles: { type: Array, default: () => [] }
    },
    mounted() {
        this.creatToc()
    },
    watch: {
        $route() {
            tocbot.destroy()
            var _this = this
            setTimeout(function () {
                _this.creatToc()
            }, 200)
        }
    },
    methods: {
        creatToc() {
            // initialize tocbot
            tocbot.init({
                // Where to render the table of contents.
                tocSelector: '.toc-container',
                // Where to grab the headings to build the table of contents.
                contentSelector: '.doc-content',
                // Which headings to grab inside of the contentSelector element.
                headingSelector: 'h2, h3, h4',
                // For headings inside relative or absolute positioned containers within content.
                hasInnerContainers: true,
                // How many heading levels should not be collapsed.
                collapseDepth: 3,
            });
            this.cleanToc()
        },
        cleanToc() {
            // remove "#" created by remark-autolink-headings
            var toc_list = document.querySelectorAll(".toc-link");
            for(let toc_item of toc_list) {
                let toc_text = toc_item.innerHTML
                toc_item.innerHTML = toc_text.substr(1)
            }
        }
    },
}
</script>