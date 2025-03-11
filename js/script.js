DATA.bestWorks.map((item) => {
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
        currentPage: null
    },
    methods: {
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
    watch: {
        currentPage: function (_new, old) {
            let body = document.getElementsByTagName("body")[0];
            if (_new === null) {
                body.style.overflowY = 'scroll';
            } else {
                body.style.overflowY = 'hidden';
            }
        }
  },
    mounted() {
        if (location.hash.length > 1) {
            let id = parseInt(location.hash.substr(1));
            this.db.bestWorks.forEach((item) => {
                if (item.id === id) {
                    this.setCurrentPage(id);
                }
            });
        }
    }
});


window.addEventListener('hashchange', () => {
  if (location.hash.length === 0) {
      app.setCurrentPage(null);
  }
}, false);