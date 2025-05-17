for (let i = 0; i < DATA.length; i++) {
    // collapse all descriptions except first
    DATA[i]['collapsed'] = i === 0;
}

new Vue({
    el: '#resume',
    data: {
        data: DATA,
        skills: SKILLS,
    },
    mounted() {
        for (let i = 0; i < this.data.length; i++) {
            // init nanogallery
            if (this.data[i].gallery) {

                let images = [];
                let $gallery = $('#gallery' + i);

                for (let j = 0; j < this.data[i]['gallery'].length; j++) {
                    let src = this.data[i]['gallery'][j];
                    let srct = src.replace('gallery', 'gallery/thumb').replace('.png', '.jpg')
                    images.push({src: src, srct: srct})
                }

                $gallery.nanogallery2({
                    items: images,
                    thumbnailWidth: 'auto',
                    thumbnailHeight: 50,
                    thumbnailAlignment: 'center',
                    thumbnailLabel: {display: false},
                    thumbnailHoverEffect2: 'imageScaleIn80|labelAppear75',
                    thumbnailBorderHorizontal: 1,
                    thumbnailBorderVertical: 1,
                    thumbnailBorderColor: '#ffffff',
                });

                $gallery.show();
            }
        }
    },
    methods: {
        collapseDesc(index) {
            this.data[index]['collapsed'] = true;
        }
    }
});
