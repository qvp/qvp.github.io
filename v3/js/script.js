let app = new Vue({
    el: '#scroll',
    data: {
        db: DATA,
        filterByTag: null,
        currentPage: null
    },
    computed: {
        tagsGrouped() {
            return this.db.tag_groups.map((g) => {
                return {
                    title: g.title,
                    tags: this.db.tags.filter((t) => {
                        return t.group === g.id
                    })
                }
            });
        },
        portfolioChunked() {
            let i, j, res = [], chunk = 4;
            for (i = 0, j = this.db.portfolio.length; i < j; i += chunk) {
                res.push(this.db.portfolio.slice(i, i + chunk));
            }
            return res
        }
    },
    methods: {
        setFilterByTag(tag_id) {
            this.filterByTag = this.filterByTag === tag_id ? null : tag_id;
        },
        getTagsNames(tags_ids) {
            return tags_ids.map((id) => {
                return this.db.tags.filter((tag) => {
                    return tag.id === id
                })[0].title
            });
        },
        getSideImages(images, side) {
            let res = [], i = side === 'left' ? 0 : 1;
            for (i; i < images.length; i += 2) {
                res.push(images[i])
            }
            return res
        }
    },
    mounted() {
       $(".open-modal").animatedModal({
           animationDuration: '.7s',
           beforeOpen: (el) => {
               app.currentPage = $(el).data('page');
           },
           afterClose: () => {
               document.getElementById('animatedModal').scrollTop = 0;
           }
       });
    }
});
