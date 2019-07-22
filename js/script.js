DATA.portfolio.map((item) => {
    return item.previews.map((src) => {
        let image = new Image();
        image.src = 'previews/' + src;
        return image;
    });
});

let app = new Vue({
    el: '#scroll',
    data: {
        db: DATA,
        filterByTag: null,
        currentPage: null
    },
    computed: {
        getFilteredWorks() {
            if (this.filterByTag === null) {
                return this.db.portfolio;
            } else {
                return this.db.portfolio
                    .filter(e => e.tags.indexOf(this.filterByTag) !== -1)
                    .concat(this.db.portfolio.filter(e => e.tags.indexOf(this.filterByTag) === -1))
            }
        }
    },
    methods: {
        setFilterByTag(tag_id) {
            this.filterByTag = this.filterByTag === tag_id ? null : tag_id;
        },
        setCurrentPage(page_id) {
            this.currentPage = page_id;
            if (page_id) {
                location.hash = '#' + page_id;
            } else {
                history.replaceState(null, null, ' ');
            }
        },
        getTagsNames(tags_ids) {
            return tags_ids.map((id) => {
                return this.db.tags.filter((tag) => {
                    return tag.id === id;
                })[0].title;
            });
        },
        getSideImages(images, side) {
            let res = [], i = side === 'left' ? 0 : 1;
            for (i; i < images.length; i += 2) {
                res.push(images[i]);
            }
            return res;
        }
    },
    mounted() {
        if (location.hash.length > 1) {
            let id = parseInt(location.hash.substr(1));
            DATA.portfolio.forEach((item) => {
                if (item.id === id) {
                    this.setCurrentPage(id);
                }
            });
        }
    }
});
