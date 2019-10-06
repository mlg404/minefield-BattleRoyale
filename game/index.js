var a = {
    sizex: 0,
    sizey: 0,
    mines: {},
    template: [],


    setSize(x,y){
        this.sizex = x;
        this.sizey = y;
    },
    assetMinefield(){
        this.template = Array.from({length: this.sizex});
        this.template.forEach(function (element, index, array) {
            a.template[index] = Array.from({length: a.sizey});
        });
        this.template.forEach(function (element1, index1, array1) {
            array1.forEach(function (element2, index2, array2) {
                a.template[index1][index2] = index1 +''+ index2;
            });
        });
    },
    plantMines(qnt){
        this.mines = {

        }
    }
};