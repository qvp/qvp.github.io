new Vue({
    el: '#resume',
    data: {
        data: DATA,
    },
    methods: {
        gallery(index) {
            // $('#gallery' + index).show();

            let images = [];
            for (let i = 0; i < this.data[index]['gallery'].length; i++) {
                images.push({src: this.data[index]['gallery'][i], srct: this.data[index]['gallery'][i], title: ''})
            }

            // $('#gallery' + index).on('galleryRenderEnd.nanogallery2', function(e) {
            //     $('#gallery' + index).find('img').click();
            // });

            $('#gallery' + index).nanogallery2({
                items: images,
                thumbnailWidth: 'auto',
                thumbnailHeight: 50,
                thumbnailAlignment: 'center',
                thumbnailLabel: {display: false},
                thumbnailHoverEffect2: 'imageScaleIn80|labelAppear75',
            });



            // window.location.hash = '#nanogallery/gallery' + index + '/0/' + (index + 1);
        },
    },
    mounted() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].gallery) {

                let images = [];
                let $gallery = $('#gallery' + i);
                console.log($gallery)
                for (let j = 0; j < this.data[i]['gallery'].length; j++) {
                    images.push({src: this.data[i]['gallery'][j], srct: this.data[i]['gallery'][j]})
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
                });

                $gallery.show();
            }
        }
    }
});
